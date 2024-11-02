const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./clientes.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        cpf TEXT NOT NULL UNIQUE,
        telefone TEXT,
        status TEXT
    )`);
    
    db.run(`INSERT INTO clientes (nome, email, cpf, telefone, status)
            VALUES ('Claudio Almiro', 'email@teste.com.br', '123.456.789-00', '(11)9999-9999', 'Ativo'), 
            ('Maria Amais braba', 'email@teste.com.br', '987.654.321-00', '(11)9999-9999', 'Inativo'), 
            ('Gusta Omais pica', 'email@teste.com.br', '988.654.321-00', '(11)9999-9999', 'Aguardando'),
            ('Omar Omais pobre', 'email@teste.com.br', '429.554.312-00', '(11)9999-9999', 'Desativado')`);
});

console.log('Criado com sucesso!')

module.exports = db;
