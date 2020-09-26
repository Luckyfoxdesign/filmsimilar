<script context="module">
	export function preload() {
		return this.fetch("/index.json")
			.then((r) => r.json())
			.then((films) => {
				return { films }
			})
	}
</script>

<script>
	export let films
	import Film from "../components/film_block/Film.svelte"
</script>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
		// height: 100%;
	}
	.films {
		padding-top: 24px;
		&-list {
			display: grid;
			grid-template-columns: repeat(4, 174px);
			grid-template-rows: auto;
			margin-top: 24px;
			row-gap: 24px;
			column-gap: 24px;
		}
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
		width: 224px;
		height: 400px;
		background-color: #cccccc;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container">
	<div class="films">
		<h1>Популярные фильмы</h1>
		<div class="films-list">
			{#each films as { title, year, img }}
				<Film {title} {year} src={img} />
			{:else}
				<p>Loading...</p>
			{/each}
		</div>
	</div>
	<div class="sidebar">
		<div class="ad" />
	</div>
</div>
