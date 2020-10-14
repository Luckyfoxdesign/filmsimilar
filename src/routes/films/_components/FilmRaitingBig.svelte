<script>
	export let raitingCount = 0
	export let reviewCount = 0
</script>

<style lang="scss">
	.film-information {
		&__raiting-block {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		&__raiting-count {
			margin-left: 4px;
			margin-right: 8px;
			font-weight: 500;
			color: var(--Gray33);
		}
		&__review-count {
			color: var(--Gray75);
		}
	}
</style>

<div class="film-information__raiting-block">
	<svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
			fill="#FFCC48" />
	</svg>
	<div class="film-information__raiting-count">{raitingCount}/10</div>
	<div class="film-information__review-count">{reviewCount}</div>
</div>
