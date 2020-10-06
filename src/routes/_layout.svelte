<script>
	import Footer from "../components/Footer.svelte"
	import Header from "../components/Header.svelte"
</script>

<style>
	main {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: center;
		min-height: calc(100vh - 74px);
	}
	:global(.container-ad) {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
		position: relative;
	}
	:global(.sidebar) {
		border-left: 0.5px solid var(--GrayCC);
		padding-left: 32px;
		padding-top: 24px;
		position: relative;
	}
</style>

<Header />
<main>
	<slot />
</main>

<Footer />
