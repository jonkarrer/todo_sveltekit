<script>
	import { setFormType } from '../../store';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span on:click={() => setFormType('create')}>
	<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M28.75 13.75H16.25V1.24998C16.25 0.559629 15.6904 0 15 0C14.3096 0 13.75 0.559629 13.75 1.24998V13.75H1.24998C0.559629 13.75 0 14.3096 0 15C0 15.6904 0.559629 16.25 1.24998 16.25H13.75V28.75C13.75 29.4403 14.3096 29.9999 14.9999 29.9999C15.6903 29.9999 16.2499 29.4403 16.2499 28.75V16.25H28.7499C29.4403 16.25 29.9999 15.6904 29.9999 15C30 14.3096 29.4404 13.75 28.75 13.75Z"
			fill="#DBDBDB"
		/>
	</svg>
</span>
