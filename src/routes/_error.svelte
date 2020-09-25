<script>
	export let status
	export let error

	const dev = process.env.NODE_ENV === "development"
</script>

<style>
	.container {
		display: flex;
		justify-content: center;
	}
	.content {
		width: 1024px;
		margin-top: 24px;
	}
	p {
		margin-top: 4px;
		margin-bottom: 0;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class="container">
	<div class="content">
		<h1>{status}</h1>

		<p>{error.message}</p>

		{#if dev && error.stack}
			<pre>{error.stack}</pre>
		{/if}
	</div>
</div>
