import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({ where: { email: req.body.email } });
    if (!userExist) {
      const { id, name, email, admin } = await User.create(req.body);

      return res.json({ id, name, email, admin });
    }
    return res.status(400).send({ error: 'Usuário já existe!' });
  }

  async update(req, res) {
    return res.json({ message: req.userId });
  }
}

export default new UserController();
