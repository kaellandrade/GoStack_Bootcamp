import jwt from 'jsonwebtoken';
import User from '../models/User';
import File from '../models/File';
import auth from '../../config/auth';
import * as Yup from 'yup';

class SessionControler {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({error: 'email and password is requerid'});
    }

    try {
      var {email, password} = req.body;
      var user = await User.findOne({
        where: {email}, include: [
          {
            model: File,
            as: "avatar",
            attributes: ['id', 'path', 'url']
          }
        ]
      });
    } catch (error) {
      return res.status(400).json({error: 'Invalid parameters!'});
    }

    // Usuário existe no banco?
    if (!user) {
      return res.status(401).json({error: 'User not found'});
    }
    // Senha não bate com a do banco ?
    // Compare do bcrypt é assincrono
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({error: 'Password does not match'});
    }

    const {id, name, avatar, provider} = user;
    // Token tem validade de 1 dia.
    return res.json({
      user: {id, name, email, avatar, provider},
      token: jwt.sign({id}, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

export default new SessionControler();
