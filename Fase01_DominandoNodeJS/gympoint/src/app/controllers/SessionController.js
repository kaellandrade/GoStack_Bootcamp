import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import auth from '../../config/auth';

class SessionControler {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Dados inválidos. Senha e e-mail são necessários' });
    }

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
    const { id, name, admin } = UserExist;
    return res.json({
      user: { id, name, email, admin },
      token: jwt.sign({ id, admin }, process.env.JWT_SECRET, {
        expiresIn: auth.expire,
      }),
    });
  }
}

export default new SessionControler();
