<script>
	import Header from "../components/Header.svelte"
</script>

<style>
	main {
		display: flex;
		justify-content: center;
	}
</style>

<Header />
<main>
	<slot />
</main>
