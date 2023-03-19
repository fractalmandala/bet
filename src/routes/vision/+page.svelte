<script lang="ts">
import { onMount } from 'svelte'
import { getYoutube } from '$lib/utils/supapulls'
let videos:any

onMount(async() => {
	videos = await getYoutube()
})
</script>

<div class="containerwithwidecolumn padstd box1 aligncenter typ topbox">
	<div class="columnleft">
		<h2 class="mild">
			Knowledge has always been primal to Indian civilization. But there are fundamental differences between Western episteme and Indian civilizational knowledge. 
		</h2>
	</div>
	<div class="columnright">
		<h5 class="w400">
			परमाणु is not atom, history is not इतिहास. Similarly, many works have tried to incorporate concepts like कर्म as action, प्रत्यक्ष as perception, or साक्षी as witness. Such imprecise translations do not do justice to the profound significance of these concepts within the Indian Knowledge System. To establish IKS as a universal episteme, we have to use models of thoughts that are derived from our śāstras. Both वस्तु (content) and वास्तु (form) need to emerge from there. 
		</h5>
	</div>
</div>

<div class="containerwithtitleandcolumn padstd box2 typ">
	<div class="titleofunknown">
		<h2 class="titleis">
				Our Vision
		</h2>
	</div>
	<div class="boxc">
		<div class="hreflink">
			<a href="/docs/vastuandvaastu">Vastu and Vāstu</a>
		</div>
		<div class="hreflink">
			<a href="/docs/shastrikaframework">The Śāstrika Framework</a>
		</div>
		<div class="hreflink">
			<a href="/docs/iksrepository">The Indian Knowledge Repository</a>
		</div>
		<div class="hreflink">
			<a href="/docs/reversingthegaze">Reversing the Gaze</a>
		</div>
		<div class="hreflink">
			<a href="/docs/educationasaportal">Education as a Portal</a>
		</div>
		<div class="hreflink">
			<a href="/docs/educationrooted">Education Rooted in Episteme</a>
		</div>
		<div class="hreflink">
			<a href="/docs/nepimplementation">NEP Implementation</a>
		</div>	
	</div>
</div>

<div class="dynamicwithtitleand3by2 padstd box5 typ lineit">
	<div class="titleof3by2dyn">
		<h2 class="titleis">
			IKS Roadmap and Strategy
		</h2>
	</div>
	<div class="boxof3by2dyn">
		{#if videos && videos.length > 0}
			{#each videos as item}
				<div class="boxc">
					<iframe width="100%" height="80%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					<small>{item.name}</small>	
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.box1
	@media screen and (min-width: 1024px)
		height: 100vh

</style>