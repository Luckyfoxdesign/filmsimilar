<script>
	import FilmPoster from "./FilmPoster.svelte"

	export let src
	export let title
	export let year
</script>

<style lang="scss">
	.film {
		&-info {
			margin-top: 8px;
			max-width: 174px;
		}
		&-title {
			color: var(--Gray33);
			line-height: 1.214;
			font-weight: 700;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
		}
		&-description {
			line-height: 1.214;
			font-weight: 400;
			display: -webkit-box;
			color: var(--Gray75);
			margin-top: 4px;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			margin-bottom: 0;
		}
		// &-genres {
		// 	display: inline;
		// 	-webkit-line-clamp: 2;
		// 	overflow: hidden;
		// 	text-overflow: ellipsis;
		// 	-webkit-box-orient: vertical;
		// 	max-width: 174px;
		// }
	}
</style>

<div class="film">
	<FilmPoster {src} />
	<div class="film-info">
		<div class="film-title">{title}</div>
		<p class="film-description"><span class="film-production">{year}</span> • <span class="film-genres" /></p>
	</div>
</div>
