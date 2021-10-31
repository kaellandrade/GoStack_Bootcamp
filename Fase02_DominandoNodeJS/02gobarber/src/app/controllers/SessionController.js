import jwt from 'jsonwebtoken';
import User from '../models/User';
import auth from '../../config/auth';

class SessionControler {
    async store(req, res) {
        try {
            var { email, password } = req.body;
            var user = await User.findOne({ where: { email } });
        } catch (error) {
            return res.status(400).json({ error: 'Parâmetros inválidos!' });
        }

        //Usuário existe no banco?
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }
        //Senha não bate com a do banco ?
        // Compare do bcrypt é assincrono
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        const { id, name } = user;
        // Token tem validade de 1 dia.
        return res.json({
            user: { id, name, email },
            token: jwt.sign({ id }, auth.secret, {
                expiresIn: auth.expiresIn,
            }),
        });
    }
}

export default new SessionControler();
