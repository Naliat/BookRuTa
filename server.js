// src/server.js 
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

 
const pool = new Pool({
    user: 'postgres',  
    host: 'localhost',
    database: 'Tailan',  
    password: '1412',  
    port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

// Rota para adicionar um livro
app.post('/registerBook', (req, res) => {
    const { title, author, category, publicationDate, country, description } = req.body;
    pool.query(
        'INSERT INTO my_schema.books (title, author, category, publication_date, country, description) VALUES ($1, $2, $3, $4, $5, $6)',
        [title, author, category, publicationDate, country, description],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ message: 'Livro registrado com sucesso!' });
        }
    );
});

// Rota para obter todos os livros
app.get('/books', (req, res) => {
    pool.query('SELECT * FROM my_schema.books', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json(results.rows);
    });
});

// Rota para adicionar um usuário
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    pool.query(
        'INSERT INTO my_schema.users (username, email, password) VALUES ($1, $2, $3)',
        [username, email, password],
        (error, results) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            }
            res.status(201).json({ message: 'Usuário registrado com sucesso!' });
        }
    );
});

// Rota para login
app.post('/login', (req, res) => {
    const { username, email, password } = req.body;
    const query = `
        SELECT * FROM my_schema.users 
        WHERE (username = $1 OR email = $2) 
        AND password = $3
    `;
    pool.query(query, [username, email, password], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        if (results.rows.length > 0) {
            res.status(200).json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ message: 'Credenciais inválidas!' });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
