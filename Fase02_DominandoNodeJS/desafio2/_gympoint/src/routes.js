import { Router } from 'express';
// Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Vamos Micael Andrade!' }));

export default routes;
