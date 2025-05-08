# Sistema de Cadastro de Usuários com Docker

## 📋 Descrição
Sistema web completo para cadastro de usuários utilizando uma arquitetura moderna com Docker, incluindo frontend em React, backend em Node.js e banco de dados PostgreSQL, além do PgAdmin para gerenciamento do banco.

## 🚀 Tecnologias Utilizadas
- Frontend: React.js
- Backend: Node.js com Express
- Banco de Dados: PostgreSQL
- Gerenciador de BD: PgAdmin
- Containerização: Docker e Docker Compose

## 🛠️ Estrutura do Projeto
```plaintext
.
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── backend/
│   ├── index.js
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml
```

## 🔧 Configuração e Instalação

### Pré-requisitos
- Docker
- Docker Compose

### Como Executar
1. Clone o repositório
2. No diretório do projeto, execute:
```bash
docker-compose up --build
```

## 📌 Portas e Acessos
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- PostgreSQL: localhost:5432
- PgAdmin: http://localhost:5050
  - Email: admin@admin.com
  - Senha: admin

## 💻 Funcionalidades
- Cadastro de usuários com nome e email
- Listagem de usuários cadastrados
- Interface responsiva e moderna
- Persistência de dados em PostgreSQL
- Gerenciamento do banco via PgAdmin

## 🔐 Configurações do Banco de Dados
- Database: UsuarioBD
- Usuário: postgres
- Senha: postdba

## 📝 Estrutura do Banco de Dados
```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
)
```

## 🛑 Parando a Aplicação
Para parar todos os containers:
```bash
docker-compose down
```

## 🔍 Monitoramento
- Logs dos containers podem ser visualizados através do comando:
```bash
docker-compose logs -f
```

## ⚠️ Observações Importantes
- Certifique-se de que as portas 3000, 3001, 5432 e 5050 estejam disponíveis
- O banco de dados é persistido através de volumes Docker
- A tabela de usuários é criada automaticamente na primeira execução

        
