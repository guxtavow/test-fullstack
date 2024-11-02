const express = require('express')
const db = require('./database/sqldata.js')
const app = express()
const PORT = 3001;


app.use((req,res,next) => { //METODO CORS
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.get('/clientes', (req, res)=>{ // ROTA PARA TODOS OS DADOS DO USUARIO
    db.all('SELECT * FROM clientes', [], (err, rows) => {
        if(err){
            res.status(500).json({'erro': err.message})
        }
        res.json({'clientes':rows})
    })
})

app.get('/', (req, res) => { //MAIN ROTA
    res.send('teste');
  })


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
})

