<script>
	export let segment
	import Nav from "./Navigation.svelte"
	import SearchInput from "./SearchInput.svelte"
</script>

<style lang="scss">
	header {
		display: flex;
		justify-content: center;
		padding-top: 16px;
		padding-bottom: 32px;
	}
	.search-bar {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto;
		column-gap: 24px;
		width: 1024px;
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
