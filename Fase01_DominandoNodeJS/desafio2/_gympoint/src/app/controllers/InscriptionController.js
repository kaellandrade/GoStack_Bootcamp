import { addMonths, parseISO, format, isAfter } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';
import Inscription from '../models/Inscription';
import Plan from '../models/Plan';
import Students from '../models/Students';
import Mail from '../../lib/Mail';

class InscriptionController {
  async index(_, res) {
    const inscriptions = await Inscription.findAll({
      attributes: ['start_date', 'end_date', 'price', 'id'],
      include: [
        {
          model: Plan,
          attributes: ['title', 'duration', 'price', 'id'],
          as: 'plan',
        },
        { model: Students, attributes: ['name', 'email', 'id'], as: 'student' },
      ],
    });
    return res.json(inscriptions);
  }

  async store(req, res) {
    /**
     * Verificando os dados de entrada.
     */
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
      plan_id: Yup.number().required(),
      student_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ error: 'start_date, plan_id, student_id são obrigatórios!' });
    }

    const { start_date, plan_id, student_id } = req.body;
    const plan = await Plan.findByPk(plan_id);
    const student = await Students.findByPk(student_id);

    /**
     * Existe um estudante e um plano.
     */
    const [day, month, year] = start_date.split('/');
    const dataFormat = parseISO(`${year}-${month}-${day}`);
    const endDate = addMonths(dataFormat, plan.duration);

    // Checando se a data não está no passado
    const checkIsPast = isAfter(new Date(), endDate);
    if (checkIsPast) {
      return res
        .status(400)
        .json({ error: 'A data de início já passou, escolha outra.' });
    }

    /**
     * Se o plano não existir retorna um erro.
     */
    if (!plan) {
      return res
        .status(400)
        .json({ error: `Não existe um plano de id ${plan_id}` });
    }
    if (!student) {
      return res
        .status(400)
        .json({ error: `Não existe estudente com id ${student_id}` });
    }

    // Calculando valor total do plano
    const final_price = plan.price * plan.duration;

    const dateFormatStart = format(dataFormat, "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
    const dateFormaEnd = format(endDate, "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
    await Inscription.create({
      student_id,
      plan_id,
      price: final_price,
      start_date: dataFormat,
      end_date: endDate,
    });

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Inscrição realizada com sucesso 😉',
      template: 'welcome',
      context: {
        student: student.name,
        plan: plan.title.toUpperCase(),
        inicio: dateFormatStart,
        fim: dateFormaEnd,
        value: final_price,
      },
    });

    return res.json({
      student: student.name,
      plan: plan.title.toUpperCase(),
      inicio: dateFormatStart,
      fim: dateFormaEnd,
      value: final_price,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
      plan_id: Yup.number(),
      student_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Parâmetros inválidos.' });
    }

    const { idInscription } = req.params;
    const { start_date, plan_id, student_id } = req.body;

    // Checando existe uma inscrição ativa com o id passado nos params
    const inscription = await Inscription.findByPk(idInscription);
    if (!inscription) {
      return res
        .status(400)
        .json({ error: `Não existe matricula de id ${idInscription}` });
    }
    // Checando se existe um plano cujo id_plan foi passado.
    const plan = await Plan.findByPk(plan_id);
    if (!plan) {
      return res
        .status(400)
        .json({ error: `Não existe plano de id ${plan_id}` });
    }
    // Calculando valor total do plano
    const final_price = plan.price * plan.duration;

    // Verificando se existe um studante cujo id foi passado.
    const student = await Students.findByPk(student_id);
    if (!student) {
      return res
        .status(400)
        .json({ error: `Não existe studante com id ${student_id}` });
    }

    // Verificando se a data foi passada
    if (start_date) {
      const [day, month, year] = start_date.split('/');
      const dataFormat = parseISO(`${year}-${month}-${day}`);
      const endDate = addMonths(dataFormat, plan.duration);

      // Checando se a data não está no passado
      const checkIsPast = isAfter(new Date(), endDate);
      if (checkIsPast) {
        return res
          .status(400)
          .json({ error: 'A data de início já passou, escolha outra.' });
      }

      const inscriptionUpdate = await inscription.update({
        student_id,
        plan_id,
        price: final_price,
        start_date: dataFormat,
        end_date: endDate,
      });
      res.json(inscriptionUpdate);
    }
    const inscriptionUpdate = await inscription.update({
      student_id,
      plan_id,
      price: final_price,
    });
    return res.json(inscriptionUpdate);
  }

  async delete(req, res) {
    const { idInscription } = req.params;
    const inscription = await Inscription.findByPk(idInscription);
    if (!inscription) {
      return res
        .status(400)
        .json({ error: `Nâo existe inscrição com id ${idInscription}` });
    }

    inscription.destroy();
    return res.status(200).send();
  }
}

export default new InscriptionController();
