import 'dotenv/config';
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
        this.server.use('/assets',
          express.static(path.resolve(__dirname, '..', 'src', 'app','views', 'assets'))
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
            if (process.env.NODE_ENV === 'development') {
                const erros = await new Youch(err, req).toJSON();
                return res.status(500).json(erros);
            } else {
                return res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}

export default new App().server;
