<script>
import supabase from '$lib/db'
export async function getArticles(){
	const { data, error } = await supabase
	.from('brhat-iks')
	.select()
	.order('seq',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="c-c-c-c l1">
<h2>
Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. 

</h2>
<p>
Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
</p>
</div>
	{#await getArticles()}
	<small>...</small>
	{:then data}
<h2 class="theteal theh">Events We Have Partnered On</h2>
<div class="r-r-r-r l2">
	{#each data as item}
	<div class="c-c-c-c l2a">
		<h4>{item.name}</h4>
		<div class="r-r-r-r l2arow">
		<p>{item.dates}</p>
		<p>{item.venues}</p>
		<p>{item.themes}</p>
		</div>
	</div>
	{/each}
</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}

<style>



@media screen and (min-width: 900px) {
	.theh { margin-top: 0; margin-left: 6vw; margin-bottom: 42px;}
	.l1 p { width: 60%;}
	.l2 { justify-content: flex-start;}
	.l2a { width: 44%; height: auto; margin-right: 3em; margin-bottom: 1em;}
	.l2a h4 {margin-top: 0; margin-bottom: 8px;}
	.l2arow { gap: 32px;}
	.l2arow p { text-transform: capitalize;}
	.l2arow p { font-weight: 400; font-size: 1em; margin-top: 0; color: #878787;}
	.l1{ height: 80vh; padding: 0 6vw; justify-content: center;}
	.l2 { padding: 0 6vw 8em 6vw; width: 100%; flex-wrap: wrap; }
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.l1 p { width: 60%;}
	.l2 { justify-content: flex-start;}
	.l2 h3 { margin-bottom: 32px; margin-top: 0;}
	.l2a { gap: 20em; margin-top: -2em;}
	.l2a p { font-weight: 400; font-size: 1.6em; margin-top: 0; border-bottom: 1px solid #d7d7d7; padding-bottom: 12px;}


	.l1{ height: 100vh; padding: 0 6vw; justify-content: center;}
	.l2 { padding: 0 6vw 8em 6vw; width: 100%; flex-wrap: wrap; gap: 4em;}

}

@media screen and (max-width: 767px) {

	.l2 { flex-wrap: wrap;}
}
</style>