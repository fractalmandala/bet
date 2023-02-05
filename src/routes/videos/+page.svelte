<script>
import supabase from '$lib/db'

export async function getArticles() {
	const { data, error } =  await supabase
	.from('brhat-bet')
	.select()
	.eq('type','Video')
	.order('id')
	if (error) throw new Error(error.message)
	return data
}
</script>

{#await getArticles()}
<small>...</small>
{:then data}
<div class="primecontainer-row">
	{#each data as item}
	<div class="c-c-c-c">
		<iframe class="video-container" width="100%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
	{/each}
</div>
{:catch error}
<pre>{error}</pre>
{/await}

<style>
.c-c-c-c {
	display: flex;
	flex-direction: column;
}


.primecontainer-row {
	padding-top: 120px;
	padding-bottom: 64px;
}

@media screen and (min-width: 900px) {
	.c-c-c-c { 
		width: calc(25% - 32px);
		height: max-content;
	}
	.primecontainer-row {
	flex-wrap: wrap;
	padding-left: 4vw;
	padding-right: 4vw;
	gap: 32px;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.c-c-c-c {
		width: calc(50% - 32px);
		height: max-content;
	}

	.primecontainer-row {
		flex-wrap: wrap;
		padding-left: 4vw;
		padding-right: 4vw;
		gap: 24px;
	}
}

@media screen and (max-width: 767px) {
	.c-c-c-c {
		width: calc(100% - 32px);
		height: max-content;
	}

	.primecontainer-row {
		flex-wrap: wrap;
		padding-left: 4vw;
		padding-right: 4vw;
		gap: 16px;
	}
}
</style>