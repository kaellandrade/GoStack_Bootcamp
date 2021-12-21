import { Router } from 'express';
import PlanController from './app/controllers/PlanController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import StudentsController from './app/controllers/StudentsController';
import InscriptionController from './app/controllers/InscriptionController';
import CheckinController from './app/controllers/CheckinController';
import HelpController from './app/controllers/HelpController';
import { userAuthorization, userIsAdmin } from './app/middlewares/auth';
// Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

// Routes Checkin
routes.post('/students/:idStudent/checkins', CheckinController.store);
routes.get('/students/:idStudent/checkins', CheckinController.index);

// Rotas de Help
routes.post('/students/:idStudent/help-orders', HelpController.store);
routes.get('/students/help-orders', HelpController.index);

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
routes.put('/inscription/:idInscription', InscriptionController.update);
routes.delete('/inscription/:idInscription', InscriptionController.delete);

// Routes Students
routes.post('/students', StudentsController.store);
routes.put('/students', StudentsController.update);
routes.delete('/students', StudentsController.delete);
export default routes;
