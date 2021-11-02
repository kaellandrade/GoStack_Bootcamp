import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import auth from './app/middlewares/auth';
const routes = new Router();
/**
 * Todas minhas rotas esetarão aqui.
 */
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Todas as rotas a baixo desse middleware será protegiada
routes.use(auth);

routes.put('/users', UserController.update);
export default routes;
