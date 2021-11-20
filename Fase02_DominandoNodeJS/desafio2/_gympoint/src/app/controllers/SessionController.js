import jwt from 'jsonwebtoken';
import User from '../models/User';
import auth from '../../config/auth';

class SessionControler {
  async store(req, res) {
    const { email, password } = req.body;
    const UserExist = await User.findOne({ where: { email } });
    /**
     * Veririfica se o usuário tem cadastro.
     */
    if (!UserExist) {
      return res.status(401).send({ error: 'Usuário não autorizado!' });
    }

    /**
     * Verifica se a senha do usário está batendo com a armazenada no banco.
     */
    if (!(await UserExist.checkPassword(password))) {
      return res.status(401).send({ error: 'Verifique seus dados!' });
    }
    // Deu tudo certo até aqui!
    const { id, name } = UserExist;
    return res.json({
      user: { id, name, email },
      token: jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: auth.expire,
      }),
    });
  }
}

export default new SessionControler();
