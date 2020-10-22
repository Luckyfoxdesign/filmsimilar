<script>
	let isSearchEmpty = true
	import { goto } from "@sapper/app"
	import { onMount } from "svelte"
	let input
	$: mountedInput = input

	function showClearIcon() {
		if (this.value != "") isSearchEmpty = false
		else isSearchEmpty = true
	}

	function clearSearchInput() {
		mountedInput.value = ""
		mountedInput.focus()
		isSearchEmpty = true
	}

	function searchFilm(event) {
		if (event.key === "Enter" || event.keyCode === 13) {
			if (mountedInput.value != "") goto(`/film?q=${input.value}`)
		}
	}
	onMount(() => {
		input = document.querySelector(".input")
		if (input.value != "") isSearchEmpty = false
	})
</script>

<style>
	.search-input {
		position: relative;
		width: 100%;
		height: 40px;
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
	}
	.input:focus {
		outline: none;
		border: 1px solid var(--Violet);
	}
	.reset-icon {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 24px;
		background: none;
		width: 36px;
		height: 36px;
		background-color: none;
		border: none;
		margin: 2px;
		right: 1px;
		bottom: 0;
		z-index: 1;
	}
	.reset-icon:focus {
		outline: none;
	}
	.reset-icon:hover {
		background: rgba(126, 59, 213, 0.25);
		cursor: pointer;
	}
	.reset-icon:hover .icon-select {
		fill: var(--Violet);
	}
</style>

<div class="search-input">
	<input
		class="input"
		placeholder="Название фильма, жанр, описание..."
		type="text"
		on:input={showClearIcon}
		on:keyup={(e) => searchFilm(e)} />
	{#if !isSearchEmpty}
		<button type="submit" class="reset-icon" on:click={clearSearchInput}>
			<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					class="icon-select"
					d="M7.32166 5.99985L11.8083 1.51302C11.9317 1.38951 11.9998 1.22473 12 1.04902C12 0.87322 11.9319 0.708244 11.8083 0.584927L11.4151 0.191854C11.2915 0.068049 11.1267 0.000244141 10.9508 0.000244141C10.7752 0.000244141 10.6104 0.068049 10.4868 0.191854L6.00019 4.67839L1.51337 0.191854C1.38995 0.068049 1.22507 0.000244141 1.04927 0.000244141C0.873659 0.000244141 0.70878 0.068049 0.585366 0.191854L0.192 0.584927C-0.064 0.840927 -0.064 1.25732 0.192 1.51302L4.67873 5.99985L0.192 10.4865C0.0684878 10.6102 0.000487805 10.775 0.000487805 10.9507C0.000487805 11.1264 0.0684878 11.2912 0.192 11.4148L0.585268 11.8079C0.708683 11.9316 0.873658 11.9995 1.04917 11.9995C1.22498 11.9995 1.38985 11.9316 1.51327 11.8079L6.0001 7.32122L10.4867 11.8079C10.6103 11.9316 10.7751 11.9995 10.9507 11.9995H10.9509C11.1266 11.9995 11.2914 11.9316 11.415 11.8079L11.8082 11.4148C11.9316 11.2913 11.9997 11.1264 11.9997 10.9507C11.9997 10.775 11.9316 10.6102 11.8082 10.4866L7.32166 5.99985Z"
					fill="#cccccc" />
			</svg>
		</button>
	{/if}
</div>
