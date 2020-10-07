<script>
	export let title
	export let data
</script>

<style>
	.info-element {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 1fr;
		grid-template-columns: 1fr;
		-ms-grid-rows: auto 8px auto;
		grid-template-rows: auto auto;
		row-gap: 8px;
	}
	.info-element > *:nth-child(1) {
		-ms-grid-row: 1;
		-ms-grid-column: 1;
	}
	.info-element > *:nth-child(2) {
		-ms-grid-row: 3;
		-ms-grid-column: 1;
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
