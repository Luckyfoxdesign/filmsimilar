<script>
	import Footer from "../components/Footer.svelte"
	import Header from "../components/Header.svelte"
</script>

<style>
	main {
		display: flex;
		min-height: calc(100vh - 74px);
		@media screen and (max-width: 576px) {
			justify-content: start;
		}
	}
	:global(.container-ad) {
		display: grid;
		position: relative;
		margin-left: auto;
		margin-right: auto;

		@media screen and (min-width: 0px) {
			grid-template-columns: 1fr;
			padding-left: 12px;
			padding-right: 12px;
		}
		@media screen and (min-width: 322px) {
			grid-template-columns: 1fr;
			padding-left: 12px;
			padding-right: 12px;
			margin-left: 0;
			margin-right: 0;
		}
		@media screen and (min-width: 576px) {
			grid-template-columns: 484px 224px;
			padding-left: 30px;
			padding-right: 30px;
			margin-left: auto;
			margin-right: auto;
		}
		@media screen and (min-width: 768px) {
			padding-left: 30px;
			padding-right: 30px;
			grid-template-columns: 708px 224px;
		}
		@media screen and (min-width: 992px) {
			grid-template-columns: 800px 224px;
			grid-template-rows: auto;
			padding-left: 30px;
			padding-right: 30px;
		}
	}
	:global(.sidebar) {
		border-left: 0.5px solid var(--GrayCC);
		padding-left: 32px;
		padding-top: 24px;
		position: relative;
		width: 191px;

		@media screen and (max-width: 576px) {
			border-top: 0.5px solid var(--GrayCC);
			padding-top: 32px;
			border-left: none;
			padding-left: 0;
			position: relative;
			width: 100%;
		}
	}
</style>

<Header />
<main>
	<slot />
</main>

<Footer />
