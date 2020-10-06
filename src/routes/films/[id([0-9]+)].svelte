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
	import MovieAdditionalInfo from "./_components/MovieAdditionalInfo.svelte"
	import Tag from "./_components/Tag.svelte"
	import { onMount } from "svelte"
	import { filmFirstData } from "./_store/store"

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
		if (window.performance) {
			console.info("window.performance works fine on this browser")
		}
		console.info(PerformanceNavigation.type)
		if (PerformanceNavigation.type == PerformanceNavigation.TYPE_RELOAD) {
			console.info("This page is reloaded")
		} else {
			console.info("This page is not reloaded")
		}
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
	}
	.main-information {
		position: relative;
		padding-top: 72px;
		padding-left: 24px;
	}
	.film-background {
		width: 800px;
		height: 200px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #000000;
			opacity: 0.8;
		}
	}
	.film-information {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		column-gap: 16px;
		align-items: end;
		&__raiting-block {
			margin-top: 8px;
			margin-bottom: 24px;
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		&__raiting-count {
			margin-left: 4px;
			margin-right: 8px;
			font-weight: 500;
			color: var(--Gray33);
		}
		&__review-count {
			color: var(--Gray75);
		}
	}
	.film-trailer {
		&__title {
			margin-top: 0;
			margin-bottom: 24px;
		}
		&__video {
			border-radius: 6px;
		}
	}
	.film-description {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 1.429;
		margin-right: 32px;
		color: var(--Gray33);
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
	.film-tags {
		margin-right: 32px;
		&__tags-block {
			display: flex;
			list-style: none;
			list-style-type: none;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
		}
		&__list-item {
			display: inline-block;
			margin-right: 8px;
			margin-bottom: 8px;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container-ad">
	<div class="film-about">
		<div class="main-information">
			<div class="film-background">
				<div class="film-background__overlay" />
				<img
					class="film-background__image"
					src="https://starbom.com/core/static/2015/06/1-kinoprosmotr.net_facedfb961c7dd63582c487379d34ffc.jpg"
					alt="" />
			</div>
			<div class="film-information">
				<FilmPoster src={$filmFirstData.src} />
				<div>
					<h1>{$filmFirstData.title}</h1>
					<div class="film-information__raiting-block">
						<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
								fill="#FFCC48" />
						</svg>
						<div class="film-information__raiting-count">{$filmFirstData.kinopoiskRaiting}/10</div>
						<div class="film-information__review-count">124000</div>
					</div>
					<ButtonPrimary name="Искать похожие фильмы" />
				</div>
			</div>
		</div>
		<p class="film-description">
			Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон
			приобрёл невероятную силу, проворство и способность к исцелению. Но страшной ценой: его клеточная структура
			постоянно меняется, а здравомыслие сомнительно. Всё, чего Уилсон хочет, — это держаться на плаву в социальной
			выгребной яме. Но течение в ней слишком быстрое.
		</p>
		<div class="film-trailer">
			<h2 class="film-trailer__title">Трейлер</h2>
			<div class="film-trailer__video">
				<!-- <iframe
				width="768"
				height="432"
				src="https://www.youtube.com/embed/e1l1QnJ7WA8"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen /> -->
			</div>
		</div>
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
		<div class="film-tags">
			<h2>Теги</h2>
			<ul class="film-tags__tags-block">
				<li class="film-tags__list-item">
					<Tag />
				</li>
			</ul>
		</div>
	</div>
	<aside class="sidebar">
		<MovieAdditionalInfo />
	</aside>
</div>
