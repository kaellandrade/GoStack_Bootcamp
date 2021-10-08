import Express from 'express';
const server = Express();
server.use(Express.json());

const projetos = [
];

/**
 * Lista todos o projetos cadastrados.
 */
server.get('/projects', (_, res) => {
    res.json(projetos);
});

/**
 * Cria um novo projeto e armazena na váriável projetos.
 */
server.post('/projects', (req, res) => {

    const { id, title } = req.body;

    projetos.push({id, title, tasks:[]})
    
    res.json(projetos)
});


server.listen(4000);