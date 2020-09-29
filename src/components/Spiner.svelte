<script>
	export let text
</script>

<style>
	.spin-container {
		display: inline-block;
	}
	.spiner {
		border: 8px solid var(--White); /* Light grey */
		border-top: 8px solid #4141be; /* Blue */
		border-radius: 50%;
		width: 32px;
		height: 32px;
		animation: spin 1s linear infinite;
		display: inline-block;
		vertical-align: middle;
	}
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.spiner__text {
		display: inline;
		color: var(--Gray75);
		margin-left: 8px;
	}
</style>

<div class="spin-container">
	<div class="spiner" />
	<div class="spiner__text">{text}</div>
</div>
