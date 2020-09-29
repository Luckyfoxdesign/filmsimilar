<script>
	import FilmInfoElement from "./FilmInfoElement.svelte"
</script>

<style>
	.info-containter {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		row-gap: 16px;
	}
</style>

<div class="info-containter">
	<FilmInfoElement title="Год производства" data="2981" />
	<FilmInfoElement title="Страна" data="США" />
	<FilmInfoElement title="Дата премьеры" data="2981" />
	<FilmInfoElement title="Режиссер" data="Гай Брусик, Райан мерфи, еще какой нибудь перец" />
	<FilmInfoElement title="Сценарий" data="Гай Брусик, Райан мерфи, еще какой нибудь перец" />
	<FilmInfoElement
		title="Актеры"
		data="Гай Брусик, Райан мерфи, еще какой нибудь перецГай Брусик, Райан мерфи, еще какой нибудь перецГай Брусик, Райан мерфи, еще какой нибудь перец" />
	<FilmInfoElement title="Награды" data="Теффи, золотой орел, оскар" />
	<FilmInfoElement
		title="Жанр"
		data="Триллер, комедия, ужасы, мистика, детекив, что-то еще, аниме, артхаус, мочилово, адское мочилово" />
</div>
