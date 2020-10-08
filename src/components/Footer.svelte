<style>
	footer {
		display: flex;
		justify-content: center;
		background-color: #151a30;
	}
	.contaner {
		width: 1024px;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		row-gap: 8px;
		padding-top: 12px;
		padding-bottom: 16px;
		color: var(--Gray75);
		@media screen and (max-width: 992px) {
			padding-left: 30px;
			width: 932px;
		}
		@media screen and (max-width: 768px) {
			padding-left: 30px;
			width: 708px;
		}
		@media screen and (max-width: 576px) {
			padding-left: 16px;
			width: 544px;
		}
		@media screen and (max-width: 322px) {
			padding-left: 12px;
			width: 298px;
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
