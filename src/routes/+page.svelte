<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Form from '$lib/Forms/FormContainer.svelte';
	import List from '$lib/List.svelte';

	// Data from server on init load
	export let data: any;
</script>

<main>
	<Header />
	<Form />
	<section>
		<h3>Tasks</h3>
		<ul>
			{#each data.todos as todo (todo.id)}
				<List task={todo.description} />
			{/each}
		</ul>
	</section>
</main>

<style>
	main {
		position: relative;
		height: 100vh;
		max-width: 500px;
		margin: auto;
	}

	h3 {
		margin-left: 24px;
		margin-top: 24px;
		color: var(--light-shade);
	}
</style>
