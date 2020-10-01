<script>
	export let title
	export let data
</script>

<style>
	.info-element {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		row-gap: 8px;
	}
	.info-title {
		font-size: 0.86em;
		color: var(--Violet80);
		font-weight: 500;
	}
	.info-data {
		color: var(--Gray75);
		line-height: 1.429;
	}
</style>

<div class="info-element">
	<div class="info-title">{title}</div>
	<div class="info-data">{data}</div>
</div>
