import Inscription from '../models/Inscription';
import Plan from '../models/Plan';
import Students from '../models/Students';
import { addMonths, parseISO } from 'date-fns';

class InscriptionController {
  // TODO: Usar Yup para realizar a validação.
  async index(req, res) {
    const inscriptionss = await Inscription.findAll({
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
    return res.json(inscriptionss);
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
    const dataFormt = parseISO(`${year}-${month}-${day}`);
    const endDate = addMonths(dataFormt, plan.duration);
    const final_price = plan.price * plan.duration;
    const { end_date, price } = await Inscription.create({
      student_id,
      plan_id,
      price: final_price,
      start_date: dataFormt,
      end_date: endDate,
    });

    return res.json({ preco: end_date, price });
  }
}

export default new InscriptionController();
