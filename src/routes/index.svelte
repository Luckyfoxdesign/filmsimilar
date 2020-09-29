<script>
	// export let films
	import Film from "../components/film_block/Film.svelte"
	import { onMount } from "svelte"
	import Spiner from "../components/Spiner.svelte"

	let getPopularFilmsPromise
	let isLoading = false

	async function getPopularFilms() {
		const res = await fetch("/index.json")
		const resp = await res.json()
		if (res.ok) {
			return resp
		} else {
			isLoading = false
			throw new Error(resp)
		}
	}

	onMount(() => {
		isLoading = true
		getPopularFilmsPromise = getPopularFilms()
	})
</script>

<style>
	.container {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
	}
	.films {
		padding-top: 24px;
	}
	.films-list {
		display: grid;
		grid-template-columns: repeat(4, 174px);
		grid-template-rows: auto;
		margin-top: 24px;
		row-gap: 24px;
		column-gap: 24px;
		margin-bottom: 96px;
	}
	.sidebar {
		border-left: 0.5px solid var(--GrayCC);
		padding-left: 32px;
		padding-top: 24px;
		position: relative;
	}
	.ad {
		position: sticky;
		top: 24px;
		width: 100%;
		height: 400px;
		background-color: var(--GrayCC);
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container">
	<!-- <Skeleton /> -->
	<div class="films">
		<h1>Популярные фильмы</h1>
		<div class="films-list">
			{#if isLoading}
				{#await getPopularFilmsPromise}
					<Spiner text="Загрузка..." />
				{:then films}
					{#each films as { id, title, year, img }}
						<Film {id} {title} {year} src={img} />
					{:else}
						<p>Loading...</p>
					{/each}
				{:catch error}
					<p style="color: red">{error.message}</p>
				{/await}
			{/if}
		</div>
	</div>
	<div class="sidebar">
		<div class="ad" />
	</div>
</div>
