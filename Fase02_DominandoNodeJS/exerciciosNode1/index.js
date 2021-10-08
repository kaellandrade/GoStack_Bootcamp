import Express from 'express';
const server = Express();
server.use(Express.json());

let projetos = [
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
    projetos.push({ id, title, tasks: [] })
    res.json(projetos)
});

/**
 * Atualiza o título do projeto cujo ID é passado
 * nos parâmetros.
 */
server.put('/projects/:id', (req, res) => {
    const idRecebido = req.params.id;
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
server.delete('/projects/:id', (req, res) => {
    const idRecebido = req.params.id;
    projetos = projetos.filter((projeto) => (idRecebido != projeto.id))

    res.send();
});

/**
 * Recebeuma task e adiciona a um determinado projeto.
 */
server.post('/projects/:id/tasks', (req, res) => {
    const idRecebido = req.params.id;
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