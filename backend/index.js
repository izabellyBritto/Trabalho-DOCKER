const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
  host: 'postgres',
  port: 5432,
  database: 'UsuarioBD',
  user: 'postgres', 
  password: 'postdba'
});

app.get('/', (req, res) => {
  res.json({ message: 'API está funcionando!' });
});


pool.query(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
  )
`).then(() => {
  console.log('Tabela de usuários criada com sucesso!');
}).catch(err => {
  console.error('Erro ao criar tabela:', err);
});

app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email } = req.body;
    const result = await pool.query(
      'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
      [nome, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});