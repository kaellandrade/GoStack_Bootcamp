import { addMonths, parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Inscription from '../models/Inscription';
import Plan from '../models/Plan';
import Students from '../models/Students';
import Mail from '../../lib/Mail';

class InscriptionController {
  // TODO: Usar Yup para realizar a validação.
  async index(req, res) {
    const inscriptions = await Inscription.findAll({
      attributes: ['start_date', 'end_date', 'price'],
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
    const { start_date, plan_id, student_id } = req.body;
    const plan = await Plan.findByPk(plan_id);
    const student = await Students.findByPk(student_id);
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
    /**
     * Existe um estudante e um plano.
     */
    const [day, month, year] = start_date.split('/');
    const dataFormat = parseISO(`${year}-${month}-${day}`);
    const endDate = addMonths(dataFormat, plan.duration);

    // Calculando valor total do plano
    const final_price = plan.price * plan.duration;

    const dateFormatStart = format(dataFormat, "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
    const dateFormaEnd = format(endDate, "dd 'de' MMMM 'de' yyyy", {
      locale: pt,
    });
    const { end_date, price } = await Inscription.create({
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
      fim: dateFormaEnd,
      inicio: dateFormatStart,
      value: final_price,
    });
  }
}

export default new InscriptionController();
