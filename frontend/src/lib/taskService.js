const API_URL = 'http://localhost:3000';

export async function getTasks() {
    const res = await fetch(`${API_URL}/`);
    return await res.json();
}

export async function addTask(newTaskTitle) {
    const tarefa = newTaskTitle;
    const estaConcluida = false;

    const res = await fetch(`${API_URL}/addTask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tarefa, estaConcluida })
    });
    return await res.json();
}

export async function updateTask(id, title, isClonclued) {
    const tarefa = title;
    const estaConcluida = isClonclued;

    const res = await fetch(`${API_URL}/updateTask/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tarefa, estaConcluida })
    });
    return await res.json();
}

export async function deleteTask(id) {
    const res = await fetch(`${API_URL}/deleteTask/${id}`, {
        method: 'DELETE'
    });
    return await res.json();
}
