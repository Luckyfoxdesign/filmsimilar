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

<style>
	.container {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
	}
	.about {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		row-gap: 32px;
		margin-bottom: 96px;
	}
	.sidebar {
		border-left: 0.5px solid var(--GrayCC);
		padding-left: 32px;
		padding-top: 24px;
		position: relative;
	}
	.film-background {
		width: 800px;
		height: 200px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.img-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000000;
		opacity: 0.8;
	}
	.film-info {
		position: relative;
		padding-top: 72px;
		padding-left: 24px;
	}
	.film-head {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		column-gap: 16px;
		align-items: end;
	}
	.trailer {
		border-radius: 6px;
	}
	.film-raiting {
		margin-top: 8px;
		margin-bottom: 24px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.film-review-raiting {
		margin-left: 4px;
		margin-right: 8px;
		font-weight: 500;
		color: var(--Gray33);
	}
	.film-review-count {
		color: var(--Gray75);
	}
	p {
		margin-top: 0;
		margin-bottom: 0;
		line-height: 1.429;
		margin-right: 32px;
		color: var(--Gray33);
	}
	.films-list {
		display: grid;
		grid-template-columns: repeat(4, 174px);
		grid-template-rows: auto;
		margin-top: 24px;
		row-gap: 24px;
		column-gap: 24px;
	}
	h2 {
		margin-top: 0;
		margin-bottom: 24px;
	}
	.tag-cloud {
		margin-right: 32px;
	}
	.film-tags__list-item {
		display: inline-block;
		margin-right: 8px;
		margin-bottom: 8px;
	}
	.film-tags__tags-block {
		display: flex;
		list-style: none;
		list-style-type: none;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container">
	<div class="about">
		<div class="film-info">
			<div class="film-background">
				<div class="img-overlay" />
				<img
					src="https://starbom.com/core/static/2015/06/1-kinoprosmotr.net_facedfb961c7dd63582c487379d34ffc.jpg"
					alt="" />
			</div>
			<div class="film-head">
				<FilmPoster src={$filmFirstData.src} />
				<div class="film-head-description">
					<h1>{$filmFirstData.title}</h1>
					<div class="film-raiting">
						<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
								fill="#FFCC48" />
						</svg>
						<div class="film-review-raiting">{$filmFirstData.kinopoiskRaiting}/10</div>
						<div class="film-review-count">124000</div>
					</div>
					<ButtonPrimary name="Искать похожие фильмы" />
				</div>
			</div>
		</div>
		<p>
			Уэйд Уилсон — наёмник. Будучи побочным продуктом программы вооружённых сил под названием «Оружие X», Уилсон
			приобрёл невероятную силу, проворство и способность к исцелению. Но страшной ценой: его клеточная структура
			постоянно меняется, а здравомыслие сомнительно. Всё, чего Уилсон хочет, — это держаться на плаву в социальной
			выгребной яме. Но течение в ней слишком быстрое.
		</p>
		<div class="film-trailer">
			<h2>Трейлер</h2>
			<div class="trailer">
				<!-- <iframe
				width="768"
				height="432"
				src="https://www.youtube.com/embed/e1l1QnJ7WA8"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen /> -->
			</div>
		</div>
		<div class="view-more">
			<h2>Смотрите также</h2>
			<div class="films-list">
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
		<div class="tag-cloud">
			<h2>Теги</h2>
			<ul class="film-tags__tags-block">
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
				<li class="film-tags__list-item">
					<Tag />
				</li>
			</ul>
		</div>
	</div>
	<div class="sidebar">
		<MovieAdditionalInfo />
	</div>
</div>
