<script>
	import Footer from "../components/Footer.svelte"
	import Header from "../components/Header.svelte"
</script>

<style>
	main {
		display: flex;
		justify-content: center;
		min-height: calc(100vh - 74px);
		@media screen and (max-width: 576px) {
			justify-content: flex-start;
		}
	}
	:global(.container-ad) {
		display: grid;
		grid-template-columns: 800px 1fr;
		grid-template-rows: auto;
		width: 1024px;
		position: relative;

		@media screen and (max-width: 992px) {
			grid-template-columns: 708px 1fr;
			width: 932px;
			padding-left: 30px;
			/* padding-right: 30px; */
		}
		@media screen and (max-width: 768px) {
			grid-template-columns: 484px 1fr;
			width: 708px;
			padding-left: 30px;
			/* padding-right: 30px; */
		}
		@media screen and (max-width: 576px) {
			grid-template-columns: 1fr;
			width: 544px;
			padding-left: 16px;
		}
		@media screen and (max-width: 322px) {
			grid-template-columns: 1fr;
			width: 298px;
			padding-left: 12px;
		}
	}
	:global(.sidebar) {
		border-left: 0.5px solid var(--GrayCC);
		padding-left: 32px;
		padding-top: 24px;
		position: relative;

		@media screen and (max-width: 576px) {
			border-top: 0.5px solid var(--GrayCC);
			padding-top: 32px;
			border-left: none;
			padding-left: 0;
			position: relative;
		}
	}
</style>

<Header />
<main>
	<slot />
</main>

<Footer />
