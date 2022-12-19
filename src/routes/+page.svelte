<script>
	import Header from '$lib/Header.svelte';
	import Form from '$lib/Forms/FormContainer.svelte';
	import Tasks from '$lib/Tasks.svelte';
</script>

<main>
	<Header />
	<Form />
	<Tasks />
</main>

<style>
	main {
		background-color: var(--dark);
		height: 100vh;
	}
</style>
