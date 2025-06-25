# Todo List - CRUD 🎯

I developed a simple web application with a task CRUD (Create, Read, Update, Delete) functionality using the following technologies:

- **Frontend**: Svelte
- **Backend**: Express (Node.js)
- **Banco de Dados**: MySQL

The goal was to build a complete CRUD with the following features:
✅ **Create**  
✅ **List**  
✅ **Update**  
✅ **Delete** tasks

## 🧱  What Was Built?

The application allows the user to:

- Add a new task.
- View the list of tasks stored in the database (both completed and pending tasks).
- Edit the text of an existing task.
- Delete a task.
- Mark a task as completed.
- Unmark a task as completed.

## 📚 What Was Learned

- Frontend and Backend Communication: Integration between the frontend (Svelte) and the backend (Express) was successfully implemented, allowing data exchange.
- Web Application Integration with Database: MySQL was used to store the tasks.
- Data Manipulation with Basic SQL: The operations SELECT, INSERT, UPDATE, and DELETE were implemented.
- Project Organisation: The code structure follows a clear separation between frontend and backend.

## 🚀  Expected Delivery

The code is functional with all routes implemented:

    - GET to list tasks.
    - POST to create tasks.
    - PUT to edit tasks.
    - DELETE to delete tasks.

The application is running locally, and the MySQL database has been configured with a table called `tarefas`.


## 🛠 Technologies Used

### Frontend:

- **Svelte**: A framework for building fast and reactive user interfaces.
- **tailwindCSS/HTML**: For styling and page structure.

### Backend:

- **Express (Node.js)**: Framework for creating RESTful APIs.
- **MySQL**: Relational database for storing tasks.

### Database:

- **MySQL**: MySQL: For managing and storing the tasks.


## 🏃‍♀️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/jenniferdsbaumgart/todo-list-svelte.git
cd todo-list-svelte
```

### 2. Configure the Database

Create a database in MySQL named `todo_app`.
Run the SQL script to create the `tarefas` table:
```sql
CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tarefa VARCHAR(255) NOT NULL,
    estaConcluida BOOLEAN DEFAULT FALSE
    criadaEm TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3. Install Dependencies

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

### 4. Configure Environment Variables

In the backend, create a .env file and configure the database credentials:
```bash
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=todo_app
DB_PORT=your_port
```

### 5.  Run the Backend

In the backend directory, run the server:
```bash
node server.js
```

### 6. Run the Frontend

In the frontend directory, run the application:
```bash
npm run dev
```


## 📄  License

This project is licensed under the MIT License – see the LICENSE file for more details.
