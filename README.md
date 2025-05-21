# Sistema de Cadastro de Usuários com Docker

## 📋 Descrição
Sistema web completo para cadastro de usuários utilizando uma arquitetura moderna com Docker, incluindo frontend em React, backend em Node.js e banco de dados PostgreSQL, além do PgAdmin para gerenciamento do banco.

## 🚀 Tecnologias Utilizadas
- Frontend: React.js
- Backend: Node.js com Express
- Banco de Dados: PostgreSQL
- Gerenciador de BD: PgAdmin
- Containerização: Docker e Docker Compose

# Sistema de Cadastro de Usuários com Docker

## 📋 Descrição

Este é um sistema web completo para **cadastro de usuários**, com uma arquitetura moderna baseada em contêineres Docker. Ele integra:

* **Frontend em React.js**
* **Backend em Node.js com Express**
* **Banco de dados PostgreSQL**
* **PgAdmin para gerenciamento do banco de dados**

O sistema permite cadastrar usuários com **nome e e-mail**, visualizar a lista de usuários e gerenciar o banco de dados de forma prática.

---

## 🚀 Tecnologias Utilizadas

* **Frontend:** React.js
* **Backend:** Node.js + Express
* **Banco de Dados:** PostgreSQL
* **Gerenciador do Banco:** PgAdmin
* **Containerização:** Docker + Docker Compose

---

## 🛠️ Estrutura do Projeto

```plaintext
.
├── frontend/            # Aplicação React
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── backend/             # API Node.js
│   ├── index.js
│   ├── Dockerfile
│   └── package.json
└── docker-compose.yml   # Orquestração com Docker Compose
```

---

## 🔧 Configuração e Instalação

### ✅ Pré-requisitos

* Docker instalado
* Docker Compose instalado

### ⚙️ Passo a Passo para Executar

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd <nome-da-pasta-do-projeto>
   ```

2. **Execute os contêineres com Docker Compose:**

   ```bash
   docker-compose up --build
   ```

   Esse comando irá:

   * Construir os contêineres do frontend, backend e banco de dados
   * Criar a tabela `usuarios` automaticamente
   * Iniciar todos os serviços conectados entre si

---

## 🌐 Portas e Acessos

| Serviço    | Endereço                                       |
| ---------- | ---------------------------------------------- |
| Frontend   | [http://localhost:3000](http://localhost:3000) |
| Backend    | [http://localhost:3001](http://localhost:3001) |
| PostgreSQL | localhost:5432                                 |
| PgAdmin    | [http://localhost:5050](http://localhost:5050) |

**Credenciais do PgAdmin (caso use local):**

* Email: `admin@admin.com`
* Senha: `admin`

---

## ☁️ Observação sobre o PgAdmin

> Devido a um problema com a senha do PgAdmin local, utilizei o **PgAdmin na nuvem** (versão web) para gerenciar o banco de dados. Funciona da mesma forma, basta conectar-se ao banco usando as informações abaixo:

---

## 🔐 Configurações do Banco de Dados

* **Database:** `UsuarioBD`
* **Usuário:** `postgres`
* **Senha:** `postdba`

---

## 🧱 Estrutura da Tabela

A tabela é criada automaticamente ao iniciar a aplicação. Estrutura SQL:

```sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```

---

## 💻 Funcionalidades do Sistema

* Cadastro de novos usuários com nome e email
* Visualização da lista de usuários cadastrados
* Interface moderna, responsiva e intuitiva
* Persistência de dados no PostgreSQL
* Gerenciamento visual via PgAdmin (ou via nuvem)

---

## 🛑 Parando a Aplicação

Para parar todos os serviços e containers:

```bash
docker-compose down
```

---

## 🔍 Monitoramento

Para ver os logs em tempo real:

```bash
docker-compose logs -f
```

---

## ⚠️ Dicas e Cuidados

* Certifique-se de que as portas **3000**, **3001**, **5432** e **5050** estejam **livres** no seu sistema
* Os dados do banco são **persistidos via volumes Docker**
* A tabela de usuários será criada **na primeira execução**

---

Se quiser, posso também gerar esse README em formato Markdown (`README.md`) com sugestões de estrutura adicional, badges e até capturas de tela do sistema. Deseja isso?

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

        
