import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import userAuthorization from './app/middlewares/auth';
// Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(userAuthorization);

routes.put('/users', UserController.update);
export default routes;
