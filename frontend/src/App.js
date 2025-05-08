import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const response = await fetch('http://localhost:3001/usuarios');
      const data = await response.json();
      setUsuarios(data || []); // Garante que será um array mesmo se data for null
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      setUsuarios([]); // Em caso de erro, mantém como array vazio
    }
  };

  const cadastrarUsuario = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email }),
      });
      const data = await response.json();
      setUsuarios([...usuarios, data]);
      setNome('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Sistema de Cadastro</h1>
        
        <div className="form-container">
          <h2>Novo Usuário</h2>
          <form onSubmit={cadastrarUsuario}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>

        <div className="users-container">
          <h2>Usuários Cadastrados</h2>
          <div className="users-list">
            {Array.isArray(usuarios) && usuarios.map(usuario => (
              <div key={usuario.id} className="user-card">
                <h3>{usuario.nome}</h3>
                <p>{usuario.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
