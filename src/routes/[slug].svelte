<script context="module">
	export async function preload({ params, query }) {
		const { q } = query
		if (params.slug === "film" && q != "") {
			const res = await this.fetch(`${q}.json`)
			const films = await res.json()
			return { films }
		} else this.error(404, "Страница не найдена")
	}
</script>

<script>
	export let films
	import FoundMovie from "../components/film_block/FoundMovie.svelte"
	import LoadingOverlay from "./../components/LoadingOverlay.svelte"
	import { stores } from "@sapper/app"
	const { preloading } = stores()
</script>

<style>
	.container {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
		position: relative;
	}
	.films {
		padding-top: 24px;
		padding-right: 32px;
	}
	.films-list {
		display: grid;
		grid-template-columns: 1fr;
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
	p {
		margin-top: 12px;
		color: var(--Gray75);
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container">
	{#if $preloading}
		<LoadingOverlay />
	{/if}
	<div class="films">
		<h1>Результаты поиска</h1>
		{#if films != null}
			<div class="films-list">
				{#each films as { id, year, title, img }}
					<FoundMovie {id} src={img} {title} {year} />
				{/each}
			</div>
		{:else}
			<p>По вашему запросу ничего не найдено.</p>
		{/if}
	</div>
	<div class="sidebar">
		<div class="ad" />
	</div>
</div>
