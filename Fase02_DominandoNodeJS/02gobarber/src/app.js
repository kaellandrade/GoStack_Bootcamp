import express from 'express';
import path from 'path';
import Youch from 'youch';
import 'express-async-errors';
import routes from './routes.js';
import * as Sentry from '@sentry/node';
import cors from 'cors';

import sentryConfig from './config/sentry';


import './database';

class App {
    constructor() {
        this.server = express();

        Sentry.init(sentryConfig);

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    /**
     * Aqui estara todos nosso Middlewares.
     */
    middlewares() {
        this.server.use(Sentry.Handlers.requestHandler());
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')),
        );
    }

    routes() {
        this.server.use(routes);
        this.server.use(Sentry.Handlers.errorHandler());
    }
    /**
     * Meddleware com 4 parâmetros são de tratamento de exceções.
     */
    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            const erros = await new Youch(err, req).toJSON();
            return res.status(500).json(erros);
        });
    }
}

export default new App().server;
