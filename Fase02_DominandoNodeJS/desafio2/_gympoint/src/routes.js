import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
// Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);
export default routes;
