<script>
	import SimilarityPercent from "./SimilarityPercent.svelte"
	import Raiting from "./FilmRaiting.svelte"

	export let src = null
	export let alt = null
	export let raiting = null
	export let similarityPercent = null
</script>

<style lang="scss">
	.film-poster {
		width: 174px;
		height: 256px;
		overflow: hidden;
		border-radius: 4px;
		position: relative;
		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		@media screen and (max-width: 992px) {
			width: 151px;
			height: 222px;
		}
		@media screen and (max-width: 768px) {
			width: 140px;
			height: 206px;
		}
		@media screen and (max-width: 576px) {
			width: 170px;
			height: 250px;
		}
		@media screen and (max-width: 322px) {
			width: 141px;
			height: 208px;
		}
	}
	.raiting-data {
		position: absolute;
		bottom: 8px;
		left: 8px;
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto;
		column-gap: 4px;
	}
</style>

<div class="film-poster">
	<div class="raiting-data">
		{#if raiting != null}
			<Raiting />
		{/if}
		{#if similarityPercent != null}
			<SimilarityPercent {similarityPercent} />
		{/if}
	</div>
	<img class="film-poster__image" {src} {alt} align="center" />
</div>
