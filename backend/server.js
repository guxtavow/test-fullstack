const express = require('express')
const db = require('./database/sqldata.js')
const app = express()
const PORT = 3001;


app.use((req,res,next) => { //METODO CORS
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

app.use(express.json())

app.get('/clientes', (req, res)=>{ // ROTA PARA TODOS OS DADOS DO USUARIO
    db.all('SELECT * FROM clientes', [], (err, rows) => {
        if(err){
            res.status(500).json({'erro': err.message})
        }
        res.json({'clientes':rows})
    })
})

app.post('/NovosClientes', async (req, res) => { // ROTA PARA CRIAÇÃO DOS DADOS DO USUÁRIO
    const { nome, email, cpf, celular, status } = req.body

    try {
        // Verifica se o CPF já existe
        const cpfExistente = await db.get(`SELECT * FROM clientes WHERE cpf = ?`, [cpf])
        if (!cpfExistente === null) {
            console.log('CPF já cadastrado')
            return res.json({ 'erro': 'CPF já cadastrado' })
        }

        const cpfApenasNumeros = cpf.replace(/\D/g, '') //verifica se o cpf tem 11 dígitos numericos
        if (!/^\d{11}$/.test(cpfApenasNumeros)) {
            return res.status(400).json({ erro: 'CPF inválido. Deve conter exatamente 11 dígitos.' })
        }

        const celularApenasNumeros = celular.replace(/\D/g, '') //verifica se o telefone tem 11 dígitos numericos
        if (!/^\d{11}$/.test(celularApenasNumeros)) {
            return res.status(400).json({ erro: 'Telefone inválido. Deve conter exatamente 11 dígitos (incluindo DDD).' })
        }

        const resposta = await db.run(`INSERT INTO clientes (nome, email, cpf, celular, status) VALUES (?, ?, ?, ?, ?)`, [nome, email, cpf, celular, status])
        console.log('Novo cliente criado com sucesso!')
        return res.status(201).json({ id: resposta.lastID, nome, email, cpf, celular, status })
    } catch (err) {
        return res.status(500).json({ 'erro ao criar novo usuario': err.message })
    }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}: http://localhost:${PORT}`);
})

