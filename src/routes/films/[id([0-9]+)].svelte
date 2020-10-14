<script context="module">
	// export function preload() {
	// 	return this.fetch("/index.json")
	// 		.then((r) => r.json())
	// 		.then((films) => {
	// 			return { films }
	// 		})
	//}
</script>

<script>
	import ButtonPrimary from "../../components/ButtonPrimary.svelte"
	import FilmPoster from "./_components/FilmPoster.svelte"
	import Film from "./_components/Film.svelte"
	import MovieAdditionalInfo from "./_components/FilmAdditionalInfo/MovieAdditionalInfo.svelte"
	import { onMount } from "svelte"
	import { filmFirstData } from "./_store/store"
	import FilmTrailer from "./_components/FilmTrailer.svelte"
	import FilmTags from "./_components/FilmTags.svelte"
	import FilmDescription from "./FilmDescription.svelte"
	import FilmRaitingBig from "./_components/FilmRaitingBig.svelte"
	import FilmBlockBackground from "./_components/FilmBlockBackground.svelte"

	// let getAdditionalFilmsPromise
	// let isLoading = true

	// async function getAdditionalFilms() {
	// 	const res = await fetch("/index.json")
	// 	const text = await res.json()
	// 	if (res.ok) {
	// 		return text
	// 	} else {
	// 		throw new Error(text)
	// 	}
	// }

	onMount(() => {
		// isLoading = false
		// getAdditionalFilmsPromise = getAdditionalFilms()
	})

	// export let films
	let r = "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/cc9a826d-74e1-4710-b665-63de8c423561/300x450"
</script>

<style lang="scss">
	.film-about {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		row-gap: 32px;
		margin-bottom: 96px;
		padding-right: 32px;
	}
	.main-information {
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 32px;
		margin-top: 24px;
	}
	.film-information {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		column-gap: 16px;
		align-items: end;
	}
	.film-title {
		margin-bottom: 8px;
	}
	.film-description {
		margin-top: 16px;
		margin-bottom: 24px;
	}
	.related-films {
		&__films-list {
			display: grid;
			grid-template-columns: repeat(4, 174px);
			grid-template-rows: auto;
			margin-top: 24px;
			row-gap: 24px;
			column-gap: 24px;
		}
	}
</style>

<svelte:head>
	<title>{$filmFirstData.title}</title>
</svelte:head>

<div class="container-ad">
	<div class="film-about">
		<div class="main-information">
			<FilmPoster src={$filmFirstData.src} />
			<div>
				<h1 class="film-title">{$filmFirstData.title}</h1>
				<FilmRaitingBig reviewCount={0} raitingCount={$filmFirstData.kinopoiskRaiting} />
				<div class="film-description">
					<FilmDescription />
				</div>
				<ButtonPrimary name="Искать похожие фильмы" />
			</div>
		</div>
		<FilmTrailer />
		<div class="related-films">
			<h2>Смотрите также</h2>
			<div class="related-films__films-list">
				<!-- {#if !isLoading}
					{#await getPopularFilmsPromise}
						<p>...подождите</p>
					{:then films}
						{#each films as { title, year, img }}
							<Film {title} {year} src={img} />
						{:else}
							<p>Loading...</p>
						{/each}
					{:catch error}
						<p style="color: red">{error.message}</p>
					{/await}
				{/if} -->
			</div>
		</div>
		<FilmTags/>
	</div>
	<aside class="sidebar">
		<MovieAdditionalInfo />
	</aside>
</div>
