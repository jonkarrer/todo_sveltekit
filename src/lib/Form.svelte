<script>
	export const title = 'New Task';
</script>

<form>
	<div class="header">
		<h3>{title}</h3>
		<span>X</span>
	</div>

	<input type="text" placeholder="New task name" />
	<button type="Submit">Create Task</button>
</form>

<style>
	form {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;

		display: flex;
		height: max-content;
		flex-direction: column;
		gap: 24px;

		padding: 24px;
		margin: auto;
		width: 100%;

		background-color: var(--dark);
		border: var(--light-shade) solid thin;
		border-radius: 5px;

		z-index: 1000;
	}
	h3 {
		color: var(--light-shade);
	}
	input {
		padding: 18px 12px;
		color: var(--light-shade);

		background-color: var(--light);
		outline-color: var(--light-shade);
		border: none;
		border-radius: 5px;
	}
	input::placeholder {
		color: var(--light-shade);
	}
	button {
		padding: 16px 0;
		background-color: var(--light-shade);
		border-radius: 5px;
		border: none;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.header span {
		font-size: 24px;
		color: var(--light-shade);
	}
</style>
