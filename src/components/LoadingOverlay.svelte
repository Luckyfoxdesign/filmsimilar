<script>
	import Spiner from "./Spiner.svelte"
</script>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.85);
		display: flex;
		justify-content: center;
		padding-top: 40px;
		z-index: 3;
	}
</style>

<div class="overlay">
	<Spiner />
</div>
