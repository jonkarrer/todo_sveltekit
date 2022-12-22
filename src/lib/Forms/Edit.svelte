<script>
	import { targetTodoId, setFormType } from '../../store';
	import { enhance } from '$app/forms';
</script>

<form method="POST" action="?/edit" use:enhance on:submit={() => setFormType('closed')}>
	<h3>Edit Task</h3>

	<input type="text" name="new_description" placeholder="Current task" required />
	<input type="hidden" name="todoid" value={$targetTodoId} />
	<button type="submit">Update Task</button>
</form>
