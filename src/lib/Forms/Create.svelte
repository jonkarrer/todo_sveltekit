<script>
	import { enhance } from '$app/forms';
	import { setFormType } from '../../store';
</script>

<form method="POST" action="?/create" use:enhance on:submit={() => setFormType('closed')}>
	<h3>New Task</h3>

	<input type="text" name="description" placeholder="New task name" />
	<button type="submit">Create Task</button>
</form>
