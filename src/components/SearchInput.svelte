<script>
</script>

<style lang="scss">
	.search-input {
		position: relative;
		width: 100%;
	}
	.input {
		width: inherit;
		box-sizing: border-box;
		font-weight: 400;
		color: var(--Gray30);
		height: 40px;
		padding: 11px 16px 12px 16px;
		border-radius: 20px;
		border: 1px solid var(--GrayCC);
		&:focus {
			outline: none;
			border: 1px solid var(--Violet);
		}
	}
</style>

<div class="search-input"><input class="input" placeholder="Название фильма, жанр, описание..." type="text" /></div>
