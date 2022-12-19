<script>
	import Date from '$lib/Date.svelte';
	import AddTodo from '$lib/AddTodo.svelte';
</script>

<header>
	<Date />
	<AddTodo />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
