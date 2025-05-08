const API_URL = 'http://localhost:3000';

export async function getTasks() {
    const res = await fetch(`${API_URL}/`);
    return await res.json();
}

export async function addTask(title) {
    const res = await fetch(`${API_URL}/addTask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    });
    return await res.json();
}

export async function updateTask(id, title, isConclued) {
    const res = await fetch(`${API_URL}/updateTask/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, isConclued })
    });
    return await res.json();
}

export async function deleteTask(id) {
    const res = await fetch(`${API_URL}/deleteTask/${id}`, {
        method: 'DELETE'
    });
    return await res.json();
}
