import { Router } from "express";

//Criando uma instância de Routes e passar para o app como meddlewares.
const routes = new Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Vamos lá Micael Andrade!" });
});

export default routes;