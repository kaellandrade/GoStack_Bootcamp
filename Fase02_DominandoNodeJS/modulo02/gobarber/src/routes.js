import {Router} from 'express';
const routes = new Router();
/**
 * Todas minhas rotas esetarão aqui.
 */
routes.get('/',(req, res)=>{
    return res.json({message:'Hello World!'})
})

export default routes;