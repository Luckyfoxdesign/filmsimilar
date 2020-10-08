<script>
	export let segment

	import { stores } from "@sapper/app"
	import { onMount } from "svelte"

	const { page } = stores()
	$: originalPath = $page.path

	let allTabs
	$: currentTab = originalPath

	onMount(() => {
		allTabs = document.querySelectorAll(".link")
	})

	function clickTab() {
		if (this.dataset.active === "no") {
			this.classList.add("active")
			allTabs.forEach((e) => {
				if (e.dataset.active === "yes") {
					e.dataset.active = "no"
					e.classList.remove("active")
				}
			})
			this.dataset.active = "yes"
		}
		allTabs = document.querySelectorAll(".link")
	}

	function hoverTab() {
		if (this.dataset.active === "no" && !this.classList.contains("active")) {
			this.classList.add("active")
		}
	}

	function unhoverTab() {
		if (this.dataset.active === "no" && this.classList.contains("active")) {
			this.classList.remove("active")
		}
	}
</script>

<style lang="scss">
	.navigation {
		display: flex;
		justify-content: center;
		box-shadow: inset 0px -1px 0px 0px var(--GrayCC);
	}
	nav {
		width: 1024px;
		display: grid;
		grid-template-columns: auto auto auto 1fr;
		column-gap: 24px;
		grid-template-rows: auto;
		@media screen and (max-width: 992px) {
			padding-left: 30px;
			// padding-right: 30px;
			width: 932px;
		}
		@media screen and (max-width: 768px) {
			padding-left: 30px;
			// padding-right: 30px;
			width: 708px;
		}
		@media screen and (max-width: 576px) {
			padding-left: 16px;
			// padding-right: 16px;
			width: 544px;
		}
		@media screen and (max-width: 322px) {
			padding-left: 12px;
			// padding-right: 12px;
			width: 298px;
		}
	}
	nav .link {
		text-decoration: none;
		font-size: 14px;
		font-weight: 400;
		padding-bottom: 8px;
		color: var(--Gray75);
	}
	nav .active {
		color: var(--Violet);
		border-bottom: 2px solid var(--Violet);
	}
</style>

<div class="navigation">
	<nav>
		<!-- <a
			class="link {currentTab === '/' || currentTab.includes('movies') ? 'active' : ''}"
			data-active="no"
			aria-current={segment === undefined ? 'page' : undefined}
			href="."
			on:click={clickTab}
			on:mouseout={unhoverTab}
			on:mouseover={hoverTab}>Фильмы</a> -->
		<a
			class="link active"
			data-active="no"
			aria-current={segment === undefined ? 'page' : undefined}
			href=".">Фильмы</a>
		<!-- <a
			class="link {currentTab === '/series' ? 'active' : ''}"
			data-active="no"
			aria-current={segment === 'series' ? 'page' : undefined}
			href="/series"
			on:click={clickTab}
			on:mouseout={unhoverTab}
			on:mouseover={hoverTab}>Сериалы</a>
		<a
			class="link {currentTab === '/cartoons' ? 'active' : ''}"
			data-active="no"
			aria-current={segment === 'cartoons' ? 'page' : undefined}
			href="/cartoons"
			on:click={clickTab}
			on:mouseout={unhoverTab}
			on:mouseover={hoverTab}>Мультфильмы</a> -->
	</nav>
</div>
