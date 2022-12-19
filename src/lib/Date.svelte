<script>
	const date = new Date();
	const month = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	][date.getMonth()];

	const day = date.getDate();
</script>

<h1>
	{month}
	{day}
</h1>

<style>
	h1 {
		color: var(--light-shade);
	}
</style>
