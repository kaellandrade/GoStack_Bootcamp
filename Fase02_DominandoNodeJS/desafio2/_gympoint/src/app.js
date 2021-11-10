import express from "express";
import routes from "./routes";
import cors from "cors";
// import database from "./database";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();

  }

  /**
   * Definindo meus middewares básicos.
   */
  middlewares = () => {
    this.server.use(express.json());
    this.server.use(cors());
  };

  /**
   * Definindo as rotas
   */
  routes = () => {
    this.server.use(routes);
  };
}

export default new App().server; // Exportando nosso servidor.
