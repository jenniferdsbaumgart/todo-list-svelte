<script>
  import { onMount } from "svelte";
  import { getTasks, addTask, updateTask, deleteTask } from "$lib/taskService";
  import Icon from "@iconify/svelte";
  import { fade } from "svelte/transition";

  
  let tasks = [];
  let newTaskTitle = "";
  let editingTaskId = null;
  let editedTitle = "";
  let createdCount = 0;  // Contador de tarefas criadas
  let completedCount = 0;  // Contador de tarefas concluídas

  onMount(async () => {
    tasks = await getTasks();
    updateCounters();  // Atualiza os contadores assim que as tarefas são carregadas
  });

  // Função para atualizar os contadores
  function updateCounters() {
    createdCount = tasks.length;
    completedCount = tasks.filter(task => task.estaConcluida).length;
  }

  async function handleAdd() {
    if (!newTaskTitle.trim()) return;
    await addTask(newTaskTitle);
    tasks = await getTasks();
    updateCounters();  // Atualiza os contadores
    newTaskTitle = "";
  }

  async function handleDelete(id) {
    await deleteTask(id);
    tasks = await getTasks();
    updateCounters();  // Atualiza os contadores
  }

  async function toggleTask(task) {
    await updateTask(task.id, task.tarefa, !task.estaConcluida);
    tasks = await getTasks();
    updateCounters();  // Atualiza os contadores
  }

  function startEditing(task) {
    editingTaskId = task.id;
    editedTitle = task.tarefa;
  }

  function cancelEditing() {
    editingTaskId = null;
    editedTitle = "";
  }

  async function saveEditing(task) {
    if (!editedTitle.trim()) return;
    await updateTask(task.id, editedTitle, task.estaConcluida);
    editingTaskId = null;
    tasks = await getTasks();
    updateCounters();  // Atualiza os contadores
  }

  const hoje = new Date();

  const dataFormatada = hoje.toLocaleDateString("en-UK", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
</script>

<main>
  <p class="text-2xl flex items-center justify-center tracking-wide text-zinc-300">{dataFormatada}</p>
  <div
    class="max-w-lg max-h-[40rem] overflow-hidden mx-auto mt-8 pb-6 p-6 bg-violet-300 border-1 border-violet-300 rounded-xl"
  >
      <h1 class="text-3xl text-center tracking-wider text-zinc-900 mb-2">
        What would you like to do today?
      </h1>
      
    <div class="flex gap-2 mb-2">
      <input
        class="flex-1 border border-zinc-300 rounded-lg px-3 bg-zinc-100 py-2"
        bind:value={newTaskTitle}
        placeholder="New Task"
      />
      <button
        class="bg-teal-500 hover:bg-teal-400 text-white px-4 py-2 rounded-lg"
        on:click={handleAdd}
      >
        <Icon icon="fluent:add-16-filled" width="20" height="20" />
      </button>
    </div>
    <div class="flex text-xl justify-between px-1 mb-1 text-zinc-500">
        <p>Created Tasks: {createdCount}</p>
        <p>Completed Tasks: {completedCount}</p>
    </div>

    <ul class="space-y-2 max-h-[30rem] overflow-y-scroll">
      {#each tasks as task}
        <li
          in:fade={{ duration: 300 }}
          out:fade={{ duration: 200 }}
          class="flex justify-between items-center bg-zinc-100 px-4 py-2 rounded-lg"
        >
          <div class="flex items-center gap-2 flex-1 text-black">
            <button
              class={`w-4 h-4 flex items-center justify-center rounded transition-colors duration-200 ${
                task.estaConcluida
                  ? "bg-teal-500 border-teal-500 text-white"
                  : "border-gray-400 text-gray-500"
              }`}
              on:click={() => toggleTask(task)}
              aria-label="Marcar como concluída"
            >
              <Icon
                icon={task.estaConcluida
                  ? "mdi:check"
                  : "mdi:checkbox-blank-outline"}
                width="20"
                height="20"
              />
            </button>
            {#if editingTaskId === task.id}
              <input
                class="flex-1 border border-gray-300 rounded min-h-9 px-2 py-1"
                bind:value={editedTitle}
                on:keydown={(e) => e.key === "Enter" && saveEditing(task)}
              />
            {:else}
              <span
                class={`flex-1 transition-all pb-1.5 flex items-center h-9 duration-300 ease-in-out ${
                  task.estaConcluida
                    ? "line-through text-zinc-400 italic opacity-70"
                    : "text-zinc-600"
                }`}
              >
                {task.tarefa}
              </span>
            {/if}
          </div>

          <div class="flex items-center gap-2">
            {#if editingTaskId === task.id}
              <button
                class="text-teal-600 ml-2"
                on:click={() => saveEditing(task)}
                ><Icon icon="lucide:save" width="24" height="24" /></button
              >
              <button class="text-indigo-500" on:click={cancelEditing}
                ><Icon
                  icon="material-symbols:undo-rounded"
                  width="24"
                  height="24"
                /></button
              >
            {:else}
              <button
                class="text-violet-500"
                on:click={() => startEditing(task)}
                ><Icon icon="akar-icons:edit" width="24" height="24" /></button
              >
            {/if}
            <button
              class="text-violet-500"
              on:click={() => handleDelete(task.id)}
              ><Icon
                icon="material-symbols:delete-outline-rounded"
                width="24"
                height="24"
              /></button
            >
          </div>
        </li>
      {/each}
    </ul>
  </div>
</main>

<style>
  .line-through {
    text-decoration: line-through;
  }
</style>
