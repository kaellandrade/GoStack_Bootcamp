import User from '../models/User';

class UserController {
    /**
     * Cadastrando um usário
     * Recebe os dados através da requisição
     * e insere em nosssa base de dados.
     */
    async store(req, res) {
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
}

export default new UserController();
