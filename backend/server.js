import dotenv from 'dotenv'
import mysql from 'mysql2'
import cors from 'cors'
import express from 'express'
dotenv.config()

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());
// TODO: check why this is not working
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// })

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todo_app",
    port: 3306
})

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao Banco de dados', error)
    } else {
        console.log('Conectado ao Banco de dados com sucesso!')
    }
})

app.get('/', (req, res) => {
    const query = 'SELECT * FROM tasks;';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error trying to get results', err);
            return res.status(500).json({ error: 'Error retrieving tasks' });
        }
        res.json(results);
    });
});

app.post('/addTask', (req, res) => {
    const { title, isConclued } = req.body;
    const query = 'INSERT INTO tasks (title, isConclued) VALUES (?, ?);';

    connection.query(query, [title, isConclued], (err, results) => {
        if (err) {
            console.error('Error trying to insert task', err);
            return res.status(500).json({ error: 'Error inserting task' });
        }
        res.json({ message: 'Task added successfully', taskId: results.insertId });
    });
});

app.put('/updateTask/:id', (req, res) => {
    const {id} = req.params;
    const { title, isConclued } = req.body;
    const query = 'UPDATE tasks SET title = ?, isConclued = ? WHERE id = ?;';

    connection.query(query, [title, isConclued, id], (err, results) => {
        if (err) {
            console.error('Error trying to update task', err);
            return res.status(500).json({ error: 'Error updating task' });
        }
        res.json({ message: 'Task updated successfully' });
    });
});

app.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tasks WHERE id = ?;';

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error trying to delete task', err);
            return res.status(500).json({ error: 'Error deleting task' });
        }
        res.json({ message: 'Task deleted successfully' });
    });
})

app.get('/countTasks', (req, res) => {
    const query = 'SELECT COUNT(*) AS count FROM tasks';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error trying to count tasks', err);
            return res.status(500).json({ error: 'Error counting tasks' });
        }

        res.json({ count: results[0].count });
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
