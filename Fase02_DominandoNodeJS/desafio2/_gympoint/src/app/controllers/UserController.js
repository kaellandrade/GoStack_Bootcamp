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

  /**
   * Atualiza dados do usuário apenas se estiver logado.
   * (Utilizando o meddleware de autenticação)
   */
  async update(req, res) {
    const { email, oldPassword } = req.body;
    const userUpdate = await User.findByPk(req.userId);

    if (email !== userUpdate.email) {
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res
          .status(400)
          .send({ error: 'Já existe um usuário com esse email' });
      }
    }
    /**
     * checkPassword só será verificada se o usuário deseja alterar a senha.
     */
    if (oldPassword && !(await userUpdate.checkPassword(oldPassword))) {
      return res.status(401).send({ error: 'Senha antiga está inválida!' });
    }

    // Tudo deu certo até aqui

    const { name, id, admin } = await userUpdate.update(req.body);

    return res.json({ name, id, admin, email });
  }
}

export default new UserController();
