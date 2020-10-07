<script>
	import FilmPoster from "./FilmPoster.svelte"
	import { filmFirstData } from "../_store/store"

	export let src
	export let title
	export let year
	export let id
	export let kinopoiskRaiting
	export let genres

	let fl = false

	// function addFilmInfoToStore() {
	// 	filmFirstData.set({
	// 		id: id,
	// 		title: title,
	// 		src: src,
	// 		kinopoiskRaiting: kinopoiskRaiting,
	// 		year: year,
	// 		genres: genres,
	// 	})
	// }
	let filmInfo = {
		id: id,
		title: title,
		src: src,
		kinopoiskRaiting: kinopoiskRaiting,
		year: year,
		genres: genres,
	}

	function addFilmInfoToStore() {
		filmFirstData.update((e) => (e = filmInfo))
	}
</script>

<style lang="scss">
	.film {
		position: relative;
		&:hover .film-title {
			color: var(--Violet);
		}
	}
	.film-title {
		color: var(--Gray33);
		line-height: 1.214;
		font-weight: 700;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	/* // &-genres {
		// 	display: inline;
		// 	-webkit-line-clamp: 2;
		// 	overflow: hidden;
		// 	text-overflow: ellipsis;
		// 	-webkit-box-orient: vertical;
		// 	max-width: 174px;
		// } */
	.film-info {
		margin-top: 8px;
		max-width: 174px;
	}
	.film-description {
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
	a {
		text-decoration: none;
	}
</style>

<a href="films/{id}" class="film" on:click={addFilmInfoToStore}>
	<FilmPoster {src} alt={title} raiting={8.2} similarityPercent={12} />
	<div class="film-info">
		<div class="film-title">{title}</div>
		<p class="film-description"><span class="film-production">{year}</span> <span class="film-genres" /></p>
	</div>
</a>
