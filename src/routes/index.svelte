<script>
	import Film from "../components/film_block/Film.svelte"

	const pkg = {
		value: "Популярные фильмы",
		mb: 0,
		mt: "24px",
	}
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
	.sidebar {
		border-left: 0.5px solid var(--GrayCC);
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container">
	<div class="films">
		<h1>Популярные фильмы</h1>
		<Film />
	</div>
	<div class="sidebar" />
</div>
