<script>
</script>

<style lang="scss">
	.primary-button {
		&_l {
			padding: 9px 12px 7px 12px;
			border: none;
			border-radius: 16px;
			// line-height: 16px;
			background: var(--Green60);
			color: var(--White);
			@media screen and (max-width: 320px) {
				width: 100%;
			}
		}
		&_l:hover {
			background: var(--Green70);
			cursor: pointer;
		}
		&_l:focus {
			outline: none;
		}
	}
</style>

<button type="submit" class="primary-button_l">Искать похожие</button>
