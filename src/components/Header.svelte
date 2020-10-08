<script>
	export let segment
	import Nav from "./Navigation.svelte"
	import SearchInput from "./SearchInput.svelte"
</script>

<style>
	header {
		display: flex;
		justify-content: center;
		padding-top: 16px;
		padding-bottom: 32px;
		@media screen and (max-width: 992px) {
			padding-left: 30px;
			padding-right: 30px;
		}
		@media screen and (max-width: 768px) {
			padding-left: 30px;
			padding-right: 30px;
		}
		@media screen and (max-width: 576px) {
			padding-left: 16px;
			padding-right: 16px;
		}
		@media screen and (max-width: 322px) {
			padding-left: 12px;
			padding-right: 12px;
			padding-bottom: 16px;
		}
	}
	.search-bar {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		column-gap: 24px;
		width: 1024px;
		@media screen and (max-width: 322px) {
			grid-template-columns: 1fr;
			row-gap: 16px;
		}
	}
	.logo {
		width: 160px;
		height: 40px;
		background-color: var(--Violet);
	}
</style>

<header>
	<div class="search-bar">
		<div class="logo" />
		<SearchInput />
	</div>
</header>

<Nav {segment} />
