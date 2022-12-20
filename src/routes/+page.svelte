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
		height: 100vh;
		max-width: 500px;
		margin: auto;
	}
</style>
