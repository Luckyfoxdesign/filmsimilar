<script>
	import Footer from "../components/Footer.svelte"
	import Header from "../components/Header.svelte"
</script>

<style>
	main {
		display: flex;
		justify-content: center;
		min-height: calc(100vh - 74px);
	}

	footer {
		height: 400px;
	}
</style>

<Header />
<main>
	<slot />
</main>

<Footer />
