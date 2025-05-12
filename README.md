# Todo List - CRUD 🎯

Desenvolvi uma aplicação web simples com um CRUD de tarefas, utilizando as seguintes tecnologias:

- **Frontend**: Svelte
- **Backend**: Express (Node.js)
- **Banco de Dados**: MySQL

A proposta foi construir um CRUD completo com as seguintes funcionalidades:
✅ **Criar**  
✅ **Listar**  
✅ **Editar**  
✅ **Deletar** tarefas

---

## 🧱 O que foi construído?

A aplicação permite que o usuário:

- **Adicione uma nova tarefa**.
- **Visualize a lista de tarefas** salvas no banco de dados (tanto as concluídas quanto as em aberto).
- **Edite** o texto de uma tarefa existente.
- **Exclua** uma tarefa.
- **Marque uma tarefa como concluída**.
- **Desmarque uma tarefa como concluída**.

---

## 📚 O que foi aprendido

- **Comunicação entre frontend e backend**: A integração entre o frontend (em Svelte) e o backend (Express) foi realizada, permitindo a troca de dados.
- **Integração de aplicações web com banco de dados**: O banco de dados MySQL foi utilizado para armazenar as tarefas.
- **Manipulação de dados com SQL básico**: As operações de **SELECT**, **INSERT**, **UPDATE** e **DELETE** foram implementadas.
- **Organização do projeto**: A estrutura do código segue uma clara separação entre o frontend e o backend.

---

## 🚀 Entrega esperada

O código está funcional com todas as rotas implementadas:

- **GET** para listar tarefas.
- **POST** para criar tarefas.
- **PUT** para editar tarefas.
- **DELETE** para excluir tarefas.

A aplicação está rodando localmente e o banco de dados MySQL foi configurado com uma tabela chamada `tarefas`.

---

## 🛠 Tecnologias Usadas

### Frontend:

- **Svelte**: Framework para construção de interfaces de usuário rápidas e reativas.
- **tailwindCSS/HTML**: Para estilização e estrutura da página.

### Backend:

- **Express (Node.js)**: Framework para criação de APIs RESTful.
- **MySQL**: Banco de dados relacional para armazenamento das tarefas.

### Banco de Dados:

- **MySQL**: Para gerenciar e armazenar as tarefas.

---

## 🏃‍♀️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/jenniferdsbaumgart/todo-list-svelte.git
cd todo-list-svelte
```

### 2. Configurar o banco de dados

- Crie um banco de dados no MySQL com o nome todo_app
- Execute o script SQL para criar a tabela tarefas:
```sql
CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    estaConcluida BOOLEAN DEFAULT FALSE
    criadaEm TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Instalar as dependências

Backend (Express + MySQL)
```bash
cd backend
npm install
```

Frontend (Svelte)
```bash
cd frontend
npm install
```

### 4. Configurar variáveis de ambiente

No backend, crie um arquivo .env e configure as credenciais do banco de dados:
```bash
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=todo_app
DB_PORT=sua_port
```

### 5. Rodar o backend

No diretório backend, execute o servidor:
```bash
node server.js
```

### 6. Rodar o frontend

No diretório frontend, execute o aplicativo:
```bash
npm run dev
```

---

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
