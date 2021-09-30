import express from "express";

const server = express(); //Chamando a função do express;
server.use(express.json())

/**
 * Método get recebe uma rota
 * e uma callback que será chamada quando
 * essa rota for acessada.
 */
//CRUD - Create, Read, Update, Delete
let usuarios = ['Micael', 'Marcos', 'Paulo', 'Jose', 'Daniel'];

/**
 * Mddleware de LOG global.
 */
server.use((req, res, next) => {
    console.log(`Metodo: ${req.method}; URL: ${req.url} HostName: ${req.hostname}`);
    console.time('Rec')
    next();
    console.timeEnd('Rec')//So será executado após o next() terminar;
});

/**
 * Middleware local para verificar se existe um usário na requisição.
 */
const checkUserExists = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({ error: 'User name is required!' })
    }
    return next()
}

const checkUserInArray = (req, res, next) => {
    const user = usuarios[req.params.index]
    if (!user) {
        return res.status(400).json({ error: 'Index not exist!' })
    }
    req.user = user; // Adicionado o usuário no req.
    return next()
}

/**
 * Ler todos os usuários.
 */
server.get('/users', (_, res) => {
    return res.json({ user: [...usuarios] });
});

server.get('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params;
    return res.json(req.user);
});
/**
 * Adiciona um novo usuário à meu array.
 */
server.post('/users', checkUserExists, (req, res) => {
    const { name } = req.body;
    usuarios.push(name);
    res.json(usuarios)
});

/**
 * Atualiza o nome de um usuário.
 * NOTA: Posso aplicar vários middlewares
 */
server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    usuarios[index] = name;

    return res.json(usuarios)
})

server.delete('/users/:index', checkUserInArray, (req, res, next) => {
    const { index } = req.params;
    usuarios = usuarios.filter((_, index) => index != index);
    return res.send();
})


server.listen(3000);