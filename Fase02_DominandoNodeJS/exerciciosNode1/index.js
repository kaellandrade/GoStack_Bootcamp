import Express from 'express';
const server = Express();
server.use(Express.json());

let projetos = [
];

let countReq = new Map();

/**
 * Middleware global para contabilizar requisições.
 */
server.use((req, res, next) => {
    if (countReq[req.method]!= undefined){
        countReq[req.method]++;
    }
    else{
        countReq[req.method] = 1;
    }
    
    console.log(countReq);
    next();
})


/**
 * Middleware id verify.
 */
const checkIdExists = (req, res, next) => {
    const idRecebido = req.params.id;
    const exist = projetos.some(({ id }) => id == idRecebido);
    if (!exist) {
        return res.status(404).json({ error: `Id ${idRecebido} not found` });
    }
    req.id = idRecebido;
    next();
}

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
    projetos.push({ id, title, tasks: [] })
    res.json(projetos)
});

/**
 * Atualiza o título do projeto cujo ID é passado
 * nos parâmetros.
 */
server.put('/projects/:id', checkIdExists, (req, res) => {
    const idRecebido = req.id;
    const titleRecebido = req.body.title;

    projetos = projetos.map((projeto) => {
        if (idRecebido == projeto.id) {
            return { ...projeto, title: titleRecebido };
        }
        return projeto
    });
    res.json(projetos);
});

/**
 * Recebe um id e delete o usário com esse ID
 */
server.delete('/projects/:id', checkIdExists, (req, res) => {
    const idRecebido = req.id;
    projetos = projetos.filter((projeto) => (idRecebido != projeto.id))

    res.send();
});

/**
 * Recebeuma task e adiciona a um determinado projeto.
 */
server.post('/projects/:id/tasks', checkIdExists, (req, res) => {
    const idRecebido = req.id;
    const task = req.body.title;
    projetos = projetos.map((projeto) => {
        if (projeto.id == idRecebido) {
            return { ...projeto, tasks: projeto.tasks.concat(task) };
        }
        return projeto;
    });

    res.json(projetos);
})
server.listen(4000);