const express = require('express')
const promptController = require('../controllers/prompt-controller')
const routes = express.Router() //Parte do express que cuida das rotas

routes.post('/api/prompt', promptController.sendText) //caminho para chegar ao controlador

module.exports = routes //exportamos para importar na aplicação