<script>
	import { setFormType, setTargetTodoId } from '../../store';

	export let id = '';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
	on:click={() => {
		setFormType('edit');
		setTargetTodoId(id);
	}}
	width="14"
	height="14"
	viewBox="0 0 14 14"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_49_540)">
		<path
			d="M13.3817 0.61837C12.9851 0.222402 12.4476 0 11.8872 0C11.3268 0 10.7892 0.222402 10.3927 0.61837L0 11.011V14H2.989L13.3817 3.60737C13.7775 3.21072 13.9998 2.67324 13.9998 2.11287C13.9998 1.5525 13.7775 1.01502 13.3817 0.61837ZM2.50833 12.8334H1.16667V11.4917L8.93083 3.73337L10.2725 5.07504L2.50833 12.8334ZM12.5568 2.78254L11.0944 4.24495L9.75567 2.90329L11.2175 1.4432C11.3954 1.26529 11.6367 1.16534 11.8883 1.16534C12.1399 1.16534 12.3813 1.26529 12.5592 1.4432C12.7371 1.62112 12.837 1.86243 12.837 2.11404C12.837 2.36565 12.7371 2.60695 12.5592 2.78487L12.5568 2.78254Z"
			fill="#272727"
		/>
	</g>
	<defs>
		<clipPath id="clip0_49_540">
			<rect width="14" height="14" fill="white" />
		</clipPath>
	</defs>
</svg>
