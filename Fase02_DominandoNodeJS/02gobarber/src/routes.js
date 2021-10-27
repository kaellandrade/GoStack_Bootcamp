import { Router } from 'express';
import UserController from './app/controllers/UserController';
const routes = new Router();
/**
 * Todas minhas rotas esetarão aqui.
 */
routes.post('/users', UserController.store);

export default routes;
