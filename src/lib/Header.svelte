<script>
	import Date from '$lib/Date.svelte';
	import CreateTodo from '$lib/Buttons/CreateTodo.svelte';
</script>

<header>
	<Date />
	<CreateTodo />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 24px;
	}
</style>
