import { Router } from 'express';
import PlanController from './app/controllers/PlanController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';
import InscriptionController from './app/controllers/InscriptionController';
import { userAuthorization, userIsAdmin } from './app/middlewares/auth';
// Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(userAuthorization);

// Rotas apenas para usuários autenticados.
routes.put('/users', UserController.update);

routes.use(userIsAdmin); // Rotas apenas para administradores do sistema
// Routes Plans
routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:idPlan', PlanController.update);
routes.delete('/plans/:idPlan', PlanController.delete);

// Routes Inscription
routes.get('/inscription', InscriptionController.index);
routes.post('/inscription', InscriptionController.store);

// Routes Students
routes.post('/students', StudentsController.store);
routes.put('/students', StudentsController.update);
routes.delete('/students', StudentsController.delete);
export default routes;
