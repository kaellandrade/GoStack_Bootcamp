import * as Yup from 'yup';
import {
    startOfHour,
    parseISO,
    isBefore,
    isValid,
    format,
    subHours,
} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import Notification from '../schemas/Notification';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class AppointmentController {
    async index(req, res) {
        const { page } = req.query;

        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, canceled_at: null },
            attributes: ['id', 'date', 'past', 'cancelable'],
            order: ['date'],
            limit: 20,
            offset: (page - 1) * 20,
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['name', 'id'],
                    include: [
                        {
                            model: File,
                            as: 'avatar',
                            attributes: ['id', 'path', 'url'],
                        },
                    ],
                },
            ],
        });
        return res.json(appointments);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            provider_id: Yup.number().required(),
            date: Yup.date().required(),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fals' });
        }

        const { provider_id, date } = req.body;

        /**
         * Check if provider_id is a provider
         */

        const isProvider = await User.findOne({
            where: { id: provider_id, provider: true },
        });
        /**
         * Checking if the provider is not scheduling with itself
         */

        if (!isProvider) {
            return res.status(401).json({
                error: 'You can only create appointments with provider',
            });
        }

        /**
         * Check date is valid
         */
        if (isProvider.id == req.userId) {
            return res
                .status(401)
                .json({ error: "you can't schedule with yourself" });
        }
        if (!isValid(parseISO(date))) {
            return res.status(400).json({ error: 'Date is not avalid' });
        }

        // Capturando apenas o inicio da hora e convertendo para Objeto Js
        const hourStart = startOfHour(parseISO(date));
        /**
         * Check for past dates
         */
        if (isBefore(hourStart, new Date())) {
            return res
                .status(400)
                .json({ error: 'Past dates are not permited' });
        }

        /**
         * Check date availability
         */
        const checkAvailability = await Appointment.findOne({
            where: { provider_id, canceled_at: null, date: hourStart },
        });
        if (checkAvailability) {
            return res
                .status(400)
                .json({ error: 'Appointment date is not available' });
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            provider_id,
            date: hourStart,
        });

        /**
         * Notify appointment provider.
         */
        const user = await User.findByPk(req.userId);
        const formattedDate = format(hourStart, "dd 'de' MMMM', às' H:mm'h' ", {
            locale: pt,
        });
        await Notification.create({
            content: `Novo agendamento de ${user.name} para dia ${formattedDate}`,
            user: provider_id,
        });

        return res.json(appointment);
    }

    async delete(req, res) {
        const appointment = await Appointment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    as: 'provider',
                    attributes: ['name', 'email'],
                },
                { model: User, as: 'user', attributes: ['name'] },
            ],
        });

        if (appointment.user_id !== req.userId) {
            return res.status(401).json({
                error: "You don't have parmission to cancel this appointment.",
            });
        }

        const dateWithSub = subHours(appointment.date, 2); // Removendo duas horas.
        if (isBefore(dateWithSub, new Date())) {
            // antes da data atual
            return res.status(401).json({
                error: 'You can only cancel appointments 2 hours in advance.',
            });
        }
        appointment.canceled_at = new Date();
        await appointment.save();

        await Queue.add(CancellationMail.key, {
            appointment,
        });
        return res.json(appointment);
    }
}
export default new AppointmentController();
