import * as Yup from 'yup';
import Plan from '../models/Plan';

class PlanController {
  async index(req, res) {
    const plan = await Plan.findAll({
      attributes: ['title', 'duration', 'price', 'id'],
    });
    return res.json(plan);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().min(3).required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Parâmetros inválidos!' });
    }

    const { title, duration, price } = req.body;
    const planExist = await Plan.findOne({
      where: { title: title.toLowerCase() },
    });
    if (planExist) {
      return res
        .status(401)
        .json({ error: `O plano com nome ${title.toLowerCase()} já existe.` });
    }
    const plan = await Plan.create({
      title: title.toLowerCase(),
      duration,
      price,
    });
    return res.json(plan);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().min(3),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Dados inválidos!' });
    }

    const { idPlan } = req.params;
    const { title, duration, price } = req.body;

    const planExist = await Plan.findByPk(idPlan);

    /**
     * Verifica se não estou atualizando para um novo nome que já existe.
     */
    if (title) {
      const planTitle = await Plan.findOne({
        where: {
          title: title.toLowerCase(),
        },
      });
      if (
        planTitle &&
        planTitle.title === title.toLowerCase() &&
        planTitle.id !== Number(idPlan)
      ) {
        return res.status(401).json({ error: `Já existe um plano ${title}` });
      }
    }

    await planExist.update(
      { title: title.toLowerCase(), duration, price },
      { where: { id: idPlan } },
    );

    return res.json(planExist);
  }

  async delete(req, res) {
    const id = req.params.idPlan;
    const teste = Plan.destroy({ where: { id } });
    return res.json(teste);
  }
}

export default new PlanController();
