<script>
    import { onMount } from 'svelte';
    import { getTasks, addTask, updateTask, deleteTask } from '$lib/taskService';
  
    let tasks = [];
    let newTaskTitle = '';
  
    onMount(async () => {
      tasks = await getTasks();
    });
  
    async function handleAdd() {
      if (!newTaskTitle.trim()) return;
      await addTask(newTaskTitle);
      tasks = await getTasks();
      newTaskTitle = '';
    }
  
    async function handleDelete(id) {
      await deleteTask(id);
      tasks = await getTasks();
    }
  
    async function toggleTask(task) {
      await updateTask(task.id, task.title, !task.isConclued);
      tasks = await getTasks();
    }
  </script>
  
  <div class="max-w-xl mx-auto mt-10 p-4 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Minha Lista de Tarefas</h1>
    
    <div class="flex gap-2 mb-4">
      <input
        class="flex-1 border border-gray-300 rounded px-3 py-2"
        bind:value={newTaskTitle}
        placeholder="Nova tarefa"
      />
      <button class="bg-blue-500 text-white px-4 py-2 rounded" on:click={handleAdd}>
        Adicionar
      </button>
    </div>
  
    <ul class="space-y-2">
      {#each tasks as task}
        <li class="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
          <label class="flex items-center gap-2">
            <input type="checkbox" checked={task.isConclued} on:change={() => toggleTask(task)} />
            <span class:line-through={task.isConclued}>{task.title}</span>
          </label>
          <button on:click={() => handleDelete(task.id)} class="text-red-500">🗑️</button>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    .line-through {
      text-decoration: line-through;
    }
  </style>
  