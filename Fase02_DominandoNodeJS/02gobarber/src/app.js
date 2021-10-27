import express from 'express';
import routes from './routes.js';
import './database'
class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    /**
     * Aqui estara todos nosso Middlewares.
     */
    middlewares = (_) => {
        this.server.use(express.json());
    };

    routes = () => {
        this.server.use(routes);
    };
}

export default new App().server;
