<script>
	import DeleteTodo from './Buttons/DeleteTodo.svelte';
	import EditTodo from './Buttons/EditTodo.svelte';

	export let task = 'Do something';
	export let id = '';
</script>

<li>
	{task}

	<span>
		<DeleteTodo {id} />
		<EditTodo {id} />
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
		gap: 18px;
	}
</style>
