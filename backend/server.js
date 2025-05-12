import dotenv from 'dotenv'
import mysql from 'mysql2'
import cors from 'cors'
import express from 'express'
dotenv.config()

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao Banco de dados', error)
    } else {
        console.log('Conectado ao Banco de dados com sucesso!')
    }
})

app.get('/', (req, res) => {
    const query = 'SELECT * FROM tarefas;';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao tentar obter os resultados', err);
            return res.status(500).json({ error: 'Erro ao recuperar tarefas' });
        }
        res.json(results);
    });
});

app.post('/addTask', (req, res) => {
    const { tarefa, estaConcluida } = req.body;
    const query = 'INSERT INTO tarefas (tarefa, estaConcluida) VALUES (?, ?);';

    connection.query(query, [tarefa, estaConcluida], (err, results) => {
        if (err) {
            console.error('Erro ao inserir nova tarefa.', err);
            return res.status(500).json({ error: 'Erro ao inserir nova tarefa.' });
        }
        res.json({ message: 'tarefa adicionada com sucesso!', taskId: results.insertId });
    });
});

app.put('/updateTask/:id', (req, res) => {
    const {id} = req.params;
    const { tarefa, estaConcluida } = req.body;
    const query = 'UPDATE tarefas SET tarefa = ?, estaConcluida = ? WHERE id = ?;';

    connection.query(query, [tarefa, estaConcluida, id], (err, results) => {
        if (err) {
            console.error('Erro ao atualizar a tarefa.', err);
            return res.status(500).json({ error: 'Erro ao atualizar a tarefa.' });
        }
        res.json({ message: 'Tarefa atualizada com sucesso.' });
    });
});

app.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM tarefas WHERE id = ?;';

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro ao tentar deletar a tarefa', err);
            return res.status(500).json({ error: 'Erro ao tentar deletar a tarefa.' });
        }
        res.json({ message: 'Tarefa deletada com sucesso.' });
    });
})

app.listen(port, () => {
    console.log(`Servidor conectado! Servidor está rodando em: http://localhost:${port}`);
});
