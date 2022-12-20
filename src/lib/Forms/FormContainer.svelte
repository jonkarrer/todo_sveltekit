<script>
	import { toggleFormComponent, setFormType } from '../../store';
	import Create from './Create.svelte';
	import Edit from './Edit.svelte';
	export const title = 'New Task';
</script>

<div class="wrapper" style={$toggleFormComponent === 'closed' ? 'display:none' : 'display:block'}>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="close_button" on:click={() => setFormType('closed')}>X</div>

	{#if $toggleFormComponent === 'edit'}
		<Edit />
	{/if}
	{#if $toggleFormComponent === 'create'}
		<Create />
	{/if}
</div>

<style>
	.wrapper {
		position: absolute;
		left: 0;

		top: 0;
		bottom: 0;

		padding: 24px;
		margin: auto;
		width: 100%;
		height: max-content;

		background-color: var(--dark);
		border: var(--light-shade) solid thin;
		border-radius: 5px;

		z-index: 1000;
	}
	.close_button {
		position: absolute;
		right: 24px;

		font-size: 24px;
		color: var(--light-shade);
	}
	:global(form) {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	:global(form h3) {
		color: var(--light-shade);
	}
	:global(input) {
		padding: 18px 12px;
		color: var(--light-shade);

		background-color: var(--light);
		outline-color: var(--light-shade);
		border: none;
		border-radius: 5px;
	}
	:global(input::placeholder) {
		color: var(--light-shade);
	}
	:global(button) {
		padding: 16px 0;
		background-color: var(--light-shade);
		border-radius: 5px;
		border: none;
	}
</style>
