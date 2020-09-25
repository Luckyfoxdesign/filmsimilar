<script>
	import FilmPoster from "../../components/film_block/FilmPoster.svelte"

	let r = "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7fd77fa3-9f78-457b-8a51-e2ae8008f90c/300x450"
</script>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
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
		position: relative;
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
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div class="container">
	<div class="about">
		<div class="film-info">
			<div class="film-background">
				<div class="img-overlay" />
				<img src="https://st.kp.yandex.net/im/kadr/3/5/0/kinopoisk.ru-Vodovorot-3504305.jpg" alt="" />
			</div>
			<div class="film-head">
				<FilmPoster src={r} />
			</div>
		</div>
	</div>
	<div class="sidebar">
		<div class="ad" />
	</div>
</div>
