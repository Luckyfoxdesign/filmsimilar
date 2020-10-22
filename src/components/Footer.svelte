<style lang="scss">
	footer {
		background-color: #151a30;
		width: 100%;
		display: flex;
		@media screen and (min-width: 0px) {
			justify-content: start;
		}
		@media screen and (min-width: 576px) {
			justify-content: center;
		}
	}
	.contaner {
		display: grid;
		grid-template-rows: auto auto;
		row-gap: 8px;
		padding-top: 12px;
		padding-bottom: 16px;
		color: var(--Gray75);

		@media screen and (min-width: 0px) {
			padding-left: 12px;
		}
		@media screen and (min-width: 322px) {
			grid-template-columns: 1fr;
		}
		@media screen and (min-width: 576px) {
			grid-template-columns: 708px;
		}
		@media screen and (min-width: 768px) {
			grid-template-columns: 932px;
		}
		@media screen and (min-width: 992px) {
			grid-template-columns: 1024px;
		}
	}
	.link {
		text-decoration: none;
		color: var(--Gray75);
	}
</style>

<footer>
	<div class="contaner">
		<a class="link" href="mailto:someone@yoursite.com">someone@yoursite.com</a>
		<div class="copyright">© 2003 – 2020, КиноПоиск</div>
	</div>
</footer>
