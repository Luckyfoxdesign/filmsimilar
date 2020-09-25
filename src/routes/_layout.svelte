<script>
	import Footer from "../components/Footer.svelte"
	import Header from "../components/Header.svelte"
</script>

<style>
	main {
		display: flex;
		justify-content: center;
		height: 100%;
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
