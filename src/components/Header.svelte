<script>
	import Logo from "../routes/films/_components/Logo.svelte"

	export let segment
	import Nav from "./Navigation.svelte"
	import SearchInput from "./SearchInput.svelte"
</script>

<style lang="scss">
	header {
		display: flex;
		padding-top: 16px;
		// padding-bottom: 32px;
		padding-bottom: 16px;
		border-bottom: 1px solid var(--GrayCC);
		@media screen and (min-width: 0px) {
			justify-content: flex-start;
		}
		@media screen and (min-width: 922px) {
			justify-content: center;
		}
	}
	.search-bar {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		column-gap: 24px;
		width: 100%;
		max-width: 1024px;
		@media screen and (max-width: 576px) {
			grid-template-columns: 1fr;
			row-gap: 16px;
		}
		@media screen and (min-width: 0px) {
			padding-left: 12px;
			padding-right: 12px;
			padding-bottom: 16px;
		}
		@media screen and (min-width: 322px) {
			padding-left: 12px;
			padding-right: 12px;
			padding-bottom: 16px;
		}
		@media screen and (min-width: 576px) {
			padding-left: 30px;
			padding-right: 30px;
		}
		@media screen and (min-width: 768px) {
			padding-left: 30px;
			padding-right: 30px;
		}
		@media screen and (min-width: 992px) {
			padding-left: 30px;
			padding-right: 30px;
		}
	}
</style>

<header>
	<div class="search-bar">
		<a rel="prefetch" href="."><Logo /></a>
		<SearchInput />
	</div>
</header>

<!-- <Nav {segment} /> -->
