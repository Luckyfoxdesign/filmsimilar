<script>
	export let src
</script>

<style>
	.poster {
		width: 174px;
		height: 256px;
		overflow: hidden;
		border-radius: 4px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>

<div class="poster"><img {src} alt="" align="center" /></div>
