<script>
  import "../app.css";

  let { children } = $props();
</script>

<div
  class="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-700 text-gray-800"
>

  <main class="container mx-auto p-4">
    {@render children()}
  </main>
</div>
