<script context="module">
	export async function preload() {
		const res = await this.fetch("index.json")
		const films = await res.json()
		return { films }
	}
</script>

<script>
	import Film from "./films/_components/Film.svelte"
	import LoadingOverlay from "./../components/LoadingOverlay.svelte"
	import { stores } from "@sapper/app"

	const { preloading } = stores()
	export let films
</script>

<style lang="scss">
	.popular-films {
		padding-top: 24px;
		&__list {
			display: grid;
			grid-template-columns: repeat(4, 174px);
			grid-template-rows: auto;
			margin-top: 24px;
			row-gap: 24px;
			column-gap: 24px;
			margin-bottom: 96px;
		}
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

<div class="container-ad">
	{#if $preloading}
		<LoadingOverlay />
	{/if}
	<div class="popular-films">
		<h1>Популярные фильмы</h1>
		<div class="popular-films__list">
			{#each films as { id, title, year, img }}
				<Film {id} {title} {year} src={img} />
			{/each}
		</div>
	</div>
	<div class="sidebar">
		<div class="ad" />
	</div>
</div>
