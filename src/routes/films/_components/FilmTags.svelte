<script>
	import Tag from "./Tag.svelte"
</script>

<style lang="scss">
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

<div class="film-tags">
	<h2>Теги</h2>
	<ul class="film-tags__tags-block">
		<li class="film-tags__list-item">
			<Tag />
		</li>
	</ul>
</div>
