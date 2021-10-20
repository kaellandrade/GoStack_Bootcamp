import { Router } from 'express';

const routes = new Router();
/**
 * Todas minhas rotas esetarão aqui.
 */
routes.get('/', (req, res) => res.json({ message: 'Hello World!' }));

export default routes;
