<script>
	import DeleteTodo from './DeleteTodo.svelte';
	import EditTodo from './EditTodo.svelte';
	import ToggleTodo from './ToggleTodo.svelte';

	export let task = 'Do something';
</script>

<li>
	{task}

	<span>
		<DeleteTodo />
		<EditTodo />
		<ToggleTodo />
	</span>
</li>

<style>
	li {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin: 24px;
		padding: 12px 18px;

		background-color: var(--light);
		border-radius: 5px;
	}
	span {
		display: flex;
		align-items: center;
		gap: 14px;
	}
</style>
