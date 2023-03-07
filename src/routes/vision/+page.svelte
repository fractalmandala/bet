<script>
import supabase from '$lib/db'
export async function getArticles(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','Article')
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}
export async function getVideos(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('type','iks')
	if (error) throw new Error(error.message)
	return data
}

</script>

<div class="container-col istop l1">
	<div class="spline">
		<h2>
			Knowledge has always been primal to Indian civilization. But there are fundamental differences between Western episteme and Indian civilizational knowledge. 
		</h2>
	</div>
	<p class="wide75">
		परमाणु is not atom, history is not इतिहास. Similarly, many works have tried to incorporate concepts like कर्म as action, प्रत्यक्ष as perception, or साक्षी as witness. Such imprecise translations do not do justice to the profound significance of these concepts within the Indian Knowledge System. To establish IKS as a universal episteme, we have to use models of thoughts that are derived from our śāstras. Both वस्तु (content) and वास्तु (form) need to emerge from there. 
	</p>
</div>
<div class="container-col l2">
	<div class="spline">
	<h2 class="grey2">Our Vision</h2></div>
	<div class="r-r-r-r spline l2a">
		<div class="c-c-c-c l2aleft">
			<h3>The IKS Framework</h3>
			<h5 class="grey2 w600"><a href="/docs/vastuandvaastu">Vastu and Vāstu</a></h5>
			<h5 class="grey2 w600"><a href="/docs/shastrikaframework">The Śāstrika Framework</a></h5>
			<h5 class="grey2 w600"><a href="/docs/iksrepository">The Indian Knowledge Repository</a></h5>
			<h5 class="grey2 w600"><a href="/docs/reversingthegaze">Reversing the Gaze</a></h5>
		</div>
		<div class="c-c-c-c l2aright">
			<h3>Education and NEP</h3>
			<h5 class="grey2 w600"><a href="/docs/educationasaportal">Education as a Portal</a></h5>
			<h5 class="grey2 w600"><a href="/docs/educationrooted">Education Rooted in Episteme</a></h5>
			<h5 class="grey2 w600"><a href="/docs/nepimplementation">NEP Implementation</a></h5>
		</div>
	</div>
</div>
	<div class="container-col isbot l5">
		{#await getVideos()}
		<small>...</small>
		{:then data}
		<div class="r-r-r-r the-vidboy">
			{#each data as item}
			<div class="c-c-c-c item-box spline">
				<iframe width="100%" height="85%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<h6 class="w400">{item.name}</h6>
			</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>

<style>



@media screen and (min-width: 900px) {
	.item-box { width: calc(33.33% - 1em);}

	.l2 { justify-content: flex-start;}
	.l2 h3 { margin-bottom: 20px; margin-top: 0;}
	.l2a { gap: 20em; margin-top: -2em;}
	
	.l2aleft h5, .l2aright h5 { margin: 0; padding: 10px 0; border-bottom: 1px solid #d7d7d7;}

	.l1{ height: 100vh; justify-content: center;}
	.l2 { width: 100%; flex-wrap: wrap; gap: 4em;}
	.the-vidboy { flex-wrap: wrap; margin-top: 1em; gap: 1em; padding-top: 4em;}
	.item-box { height: 240px; margin-bottom: 24px;}
	.item-box h6 { margin-top: 8px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.l1 p { width: 60%;}
	.l2 { justify-content: flex-start;}
	.l2 h3 { margin-bottom: 32px; margin-top: 0;}
	.l2a { gap: 20em; margin-top: -2em;}

	.item-box { width: calc(33.33% - 1em);}

	.l1{ min-height: 100vh; justify-content: center;}
	.l2 { width: 100%; flex-wrap: wrap; gap: 4em;}

}

@media screen and (max-width: 767px) {
	.item-box { width: 100%; margin-bottom: 1em; height: 240px;}
	.the-vidboy { flex-wrap: wrap;}
	.l2a { flex-wrap: wrap;}
	.l2 { flex-wrap: wrap;}
	.l1, .l2 { height: 100%;}

}
</style>
