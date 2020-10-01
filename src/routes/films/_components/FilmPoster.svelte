<script>
	import SimilarityPercent from "./SimilarityPercent.svelte"
	import Raiting from "./FilmRaiting.svelte"

	export let src
	export let alt
	export let raiting
</script>

<style>
	.poster {
		width: 174px;
		height: 256px;
		overflow: hidden;
		border-radius: 4px;
		position: relative;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.raiting-similarity {
		position: absolute;
		bottom: 8px;
		left: 8px;
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		column-gap: 4px;
	}
</style>

<div class="poster">
	<div class="raiting-similarity">
		<Raiting />
		<SimilarityPercent />
	</div>
	<img {src} {alt} align="center" />
</div>
