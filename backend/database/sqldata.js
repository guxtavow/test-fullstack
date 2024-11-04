const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./clientes.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        cpf TEXT NOT NULL UNIQUE,
        celular TEXT,
        status TEXT
    )`);
    
});

console.log('Rodando SQL com sucesso!')

module.exports = db;
