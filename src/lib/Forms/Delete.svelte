<script>
	import { targetTodoId, setFormType } from '../../store';
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/delete" use:enhance on:submit={() => setFormType('closed')}>
	<h3>Delete Task</h3>

	<input type="hidden" name="todoid" value={$targetTodoId} />
	<button type="submit">YES</button>

	<button on:click={() => setFormType('closed')}>NO</button>
</form>
