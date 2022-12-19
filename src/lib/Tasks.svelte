<script>
	import List from './List.svelte';
</script>

<section>
	<h3>Tasks</h3>
	<ul>
		<List />
		<List />
		<List />
		<List />
		<List />
	</ul>
</section>

<style>
	h3 {
		margin-left: 24px;
		margin-top: 24px;
		color: var(--light-shade);
	}
	li {
		height: 45px;
		margin: 24px;

		background-color: var(--light);
		border-radius: 5px;
	}
</style>
