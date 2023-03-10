const express = require("express") //Importando as dependências
const cors = require("cors")
const routes = require("./routes/routes") //Importando as rotas

require("dotenv").config()

const app = express() //Criando instância do express

app.use(express.json()) //Tudo que a aplicação for usar
app.use(cors())
app.use(routes) //Colocando as rotas

module.exports = app
