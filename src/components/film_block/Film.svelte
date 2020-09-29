<script>
	import FilmPoster from "./FilmPoster.svelte"

	export let src
	export let title
	export let year
	export let id

	// let isHovering = false

	// function showPreview() {
	// 	isHovering = true
	// 	//console.log(this)
	// }
	// function hidePreview() {
	// 	isHovering = false
	// }
</script>

<style>
	.film {
		position: relative;
	}
	.film-title {
		color: var(--Gray33);
		line-height: 1.214;
		font-weight: 700;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	/* // &-genres {
		// 	display: inline;
		// 	-webkit-line-clamp: 2;
		// 	overflow: hidden;
		// 	text-overflow: ellipsis;
		// 	-webkit-box-orient: vertical;
		// 	max-width: 174px;
		// } */
	.film-info {
		margin-top: 8px;
		max-width: 174px;
	}
	.film-description {
		line-height: 1.214;
		font-weight: 400;
		display: -webkit-box;
		color: var(--Gray75);
		margin-top: 4px;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		margin-bottom: 0;
	}
	a {
		text-decoration: none;
	}
	/* .film-preview {
		width: 404px;
		height: 256px;
		position: absolute;
		top: 0;
		left: -115px;
		z-index: 2;
		border-radius: 6px;
	} */
</style>

<a href="films/{id}" class="film">
	<FilmPoster {src} alt={title} />
	<div class="film-info">
		<div class="film-title">{title}</div>
		<p class="film-description"><span class="film-production">{year}</span> <span class="film-genres" /></p>
	</div>
	<!-- {#if isHovering}
		<div class="film-preview">
			<iframe
				width="404"
				height="256"
				src="https://www.youtube.com/embed/e1l1QnJ7WA8"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen />
		</div>
	{/if} -->
</a>
