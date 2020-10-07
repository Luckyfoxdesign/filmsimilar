<style lang="scss">
	.film-background {
		width: 800px;
		height: 200px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		&__image {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		&__overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: #000000;
			opacity: 0.8;
		}
	}
</style>

<div class="film-background">
	<div class="film-background__overlay" />
	<img
		class="film-background__image"
		src="https://starbom.com/core/static/2015/06/1-kinoprosmotr.net_facedfb961c7dd63582c487379d34ffc.jpg"
		alt="" />
</div>
