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

<style lang="scss">
	.films {
		padding-top: 24px;

		@media screen and (min-width: 0px) {
			padding-right: none;
			margin-bottom: 32px;
		}
		@media screen and (min-width: 576px) {
			padding-right: 32px;
			margin-bottom: none;
		}
	}
	.films-list {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		margin-top: 24px;
		row-gap: 24px;
		column-gap: 24px;
	}
	p {
		margin-top: 12px;
		color: var(--Gray75);
	}
</style>

<svelte:head>
	<title>Результаты поиска</title>
</svelte:head>

<div class="container-ad">
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
