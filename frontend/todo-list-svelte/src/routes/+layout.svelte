<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="min-h-screen bg-gray-100 text-gray-800">
	<header class="bg-blue-600 text-white p-4 shadow-md">
	  <div class="container mx-auto">
		<h1 class="text-2xl font-semibold">📝 Minha Lista de Tarefas</h1>
	  </div>
	</header>
  
	<main class="container mx-auto p-4">
		{@render children()}
	</main>
  </div>
