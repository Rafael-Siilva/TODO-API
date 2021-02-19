const express = require('express')
const app = express()
const port = 3001

const controllerUsuario = require('./Controller/usuario-controller')
const controllerTarefa = require('./Controller/tarefa-controller')

const Usuario = require('./module/usuario');

const usr = new Usuario("Rafael", "rfsilva022@gmail.com", "É MUITO GRANDE");
console.log(usr);

const port = 8080;

controllerUsuario(app)
controllerTarefa(app)

app.listen(port, () => {
    console.log(`Ouvindo em http://localhost:${port}`)
})