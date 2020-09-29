<script>
	export let name
</script>

<style>
	.primary-button_l:focus {
		outline: none;
	}
	.primary-button_l:hover {
		background: var(--Green70);
		cursor: pointer;
	}
	.primary-button_l {
		padding: 9px 12px 7px 12px;
		border: none;
		border-radius: 16px;
		/* // line-height: 16px; */
		background: var(--Green60);
		color: var(--White);
	}
</style>

<button type="submit" class="primary-button_l">{name}</button>
