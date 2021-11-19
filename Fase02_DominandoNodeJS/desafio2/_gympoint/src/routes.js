import { Router } from 'express';
import User from './app/models/User';
// Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Vamos Micael Andrade!' }));
// ! Testando Retirar isso depois
routes.post('/', async (req, res) => {
  const resposta = await User.create({
    name: 'micael',
    email: 'micael@gmail.com',
    password_hash: '123',
    admin: false,
  });
  res.json(resposta);
});

export default routes;
