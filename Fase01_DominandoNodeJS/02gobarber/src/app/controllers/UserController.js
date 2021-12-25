import * as Yup from 'yup';
import User from '../models/User';

class UserController {
    /**
     * Cadastrando um usário
     * Recebe os dados através da requisição
     * e insere em nosssa base de dados.
     */
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' });
        }

        try {
            //Verifica se o email já foi cadastrado.
            const userExists = await User.findOne({
                where: { email: req.body.email },
            });
            if (userExists) {
                return res.status(400).json({ error: 'User already exists.' });
            }
            const { id, name, email, provider } = await User.create(req.body);

            return res.json({ id, name, email, provider });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error.' });
        }
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6),
            password: Yup.string()
                .min(6)
                .when('oldPassword', (oldPassword, field) =>
                    oldPassword ? field.required() : field,
                ),
            confirmPassword: Yup.string().when('password', (password, field) =>
                password
                    ? field.required().oneOf([Yup.ref('password')])
                    : field,
            ),
        });
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validations fails' });
        }
        const { email, oldPassword } = req.body;
        const user = await User.findByPk(req.userId);
        if (email !== user.email) {
            // Deseja alterar o email
            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
                return res.status(400).json({ error: 'User alread exists.' });
            }
        }

        //deseja alterar a senha também
        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        const { id, name, provider } = await user.update(req.body);

        return res.json({ id, email, name, provider });
    }
}

export default new UserController();