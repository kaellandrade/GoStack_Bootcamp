import express from "express";

const server = express(); //Chamando a função do express;
// localhost:3000/teste

/**
 * Método get recebe uma rota
 * e uma callback que será chamada quando
 * essa rota for acessada.
 */
server.get('/users/:id', (req, res) => {
    const {id} = req.params
    return res.json({ message: `Buscando usuários: ${id}$` })
})



server.listen(3000);