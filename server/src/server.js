const app = require("./app") //Importando nossa aplicação
const port = process.env.PORT || 5000

app.listen(port, ()=>{ //Fazendo o servidor ouvir as portas
    console.log(`Server listening on port ${port}`)
})