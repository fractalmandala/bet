<script lang="ts">
import { onMount, afterUpdate } from 'svelte'
import { reveal, setDefaultOptions } from 'svelte-reveal'
import { fly } from 'svelte/transition'
import { getRecent, getArticles, getYoutube, getPartners, homeVideos, bulletin } from '$lib/utils/supapulls'
import AllBet from '$lib/components/AllBet.svelte'
import StandardCard from '$lib/components/StandardCard.svelte'
let y = 1
let blank = true
let fake = false
let recents:any 
let articles:any
let videos:any
let partners: any
let homes:any
let value:any = 'Books'
let limit:number = 3
let isFocus:boolean[] = [false, false, false, false]
let bullets:any

function fauxfake(){
	fake = !fake
}

function showFocus(index:number){
	isFocus[index] = !isFocus[index]
	for ( let i = 0; i < isFocus.length; i++ ) {
		if ( i !== index && isFocus[i] == true) {
			isFocus[i] = false
		}
	}
}

async function loadMoreVideos(){
	try {
		homes = await homeVideos(limit)
	} catch (error) {
		console.error('failed', error)
	}
}

function setFilter(newFilter:any) {
	value = newFilter
}

$: if (value) {
	(async() => {
		bullets = await bulletin(value)
	})()
}

function loadMore(){
	limit += 3
	loadMoreVideos()
}

setDefaultOptions({
	transition: 'fly',
	duration: 300,
	easing: 'easeInQuart',
	y: 48,
	blur: 0
})

onMount(async() => {
	recents = await getRecent()
	articles = await getArticles()
	videos = await getYoutube()
	partners = await getPartners()
	homes = await homeVideos(limit)
	bullets = await bulletin(value)
})
</script>

<svelte:window bind:scrollY={y}/>

<div class="scrollsnapper">

<div class="boxc ff img1">
</div>

<!-- introduction, our vision, image of students-->
<div class="containerwithrightcolumn padstd box1 aligncenter fluid lineit topbox">
  <div class="columnleft fit">
		<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/bet/twochildren.webp" alt="indian students studying" use:reveal />
	</div>
  <div class="columnright" use:reveal>
		<h6 class="grey">OUR VISION</h6>
		<h1 class="serif">Within the</h1>
		<h1 class="serif forback">next 15 years,</h1>
		<h5 class="w400">
			<span class="maroon"> no child </span>should finish education without being familiarized to the Indian knowledge repository, with texts like Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having accessed Itihāsa-Purāṇa.
		</h5>
	</div>
</div>

<div class="simplecontainer padstd box20 fluid lineit" style="background-image: url('https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/06drashta/policywall.webp')">
	<h1 class="serif"><a href="/nitividhana">Nītividhāna</a></h1>
	<h5>Civilizational Public Policy - 11 to 14 May 2023</h5>
</div>

<!--
<div class="dynamicwithtitle padstd box10 fluid lineit">
	<div class="titlearea centercalib">
		<h2 class="titleis" use:reveal>IKS Bulletin</h2>
		<div class="boxr bulletinfilters" style="gap: 24px">
			<p on:click={() => setFilter('Conferences')} on:keydown={fauxfake} class="onefilter {value === 'Conferences' ? 'selectedfilter' : ''}">Conferences</p>
			<p on:click={() => setFilter('Careers')} on:keydown={fauxfake} class="onefilter {value === 'Careers' ? 'selectedfilter' : ''}">Careers</p>
			<p on:click={() => setFilter('Courses')} on:keydown={fauxfake} class="onefilter {value === 'Courses' ? 'selectedfilter' : ''}">Courses</p>
			<p on:click={() => setFilter('Books')} on:keydown={fauxfake} class="onefilter {value === 'Books' ? 'selectedfilter' : ''}">Books</p>
			<p on:click={() => setFilter('Events')} on:keydown={fauxfake} class="onefilter {value === 'Events' ? 'selectedfilter' : ''}">Events</p>
		</div>
	</div>
	<div class="bodyarea">
		{#if bullets && bullets.length > 0}
			{#each bullets as item, i}
					<div class="standardlarger" use:reveal={{ delay: i*20 }} in:fly={{ duration: 200, delay: i * 50}} out:fly={{ delay: 0, duration: 100}}>
						<img class="image" src={item.image} alt={item.name} />
						<div class="text">
							<h5>{item.name}</h5>
							<p>{item.text}</p>
							<button class="btn1 btn01"><a href={item.link} target="_blank" rel="noreferrer">Visit</a></button>
						</div>
					</div>
			{/each}
		{/if}
	</div>
</div>
-->

<div class="dynamicwithtitleand2by2grid padstd box3 fluid lineit">
  <div class="titleof2by2dyn centercalib">
		<h2 class="titleis" use:reveal>Recent and Upcoming</h2>
	</div>
  <div class="boxof2by2dyn">
		{#if recents && recents.length > 0}
			{#each recents as item, i}
			<div use:reveal={{ delay: i*100 }}>
			<StandardCard>
				<img slot="image" src={item.image} alt={item.name} />
				<div slot="text">
					<h5>{item.name}</h5>
					<p class="grey">{item.text.slice(0,250)}...</p>
				</div>
				<button slot="button" class="btn1 btn01"><a href={item.link} target="_blank" rel="noreferrer">Visit</a></button>
			</StandardCard>
			</div>
			{/each}
		{/if}
  </div>
</div>

<div class="containerof2by2withtitle padstd box4 fluid lineit">
  <div class="titleof2by2">
		<h2 class="titleis" use:reveal>Focus Areas</h2>
	</div>
  <div class="boxof2by2">
    <div class="boxof2by2one carded fiticon" use:reveal={{ delay: 0}} on:click={() => showFocus(1)} on:keydown={() => showFocus(1)}>
			<img src="/images/icon-curr.png" alt="icon" />
			<h5>Curriculum Building</h5>
			{#if isFocus[1]}
			<p class="grey" in:fly={{x: 0, y: 200, duration: 300}}>
				Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
			</p>
			{/if}
		</div>
    <div class="boxof2by2two carded fiticon" use:reveal={{ delay: 50}} on:click={() => showFocus(2)} on:keydown={() => showFocus(2)}>
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>NEP-IKS Implementation</h5>
			{#if isFocus[2]}
			<p class="grey" in:fly={{x: 0, y: 200, duration: 300}}>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
			</p>
			{/if}
		</div>
    <div class="boxof2by2three carded fiticon" use:reveal={{ delay: 100}} on:click={() => showFocus(3)} on:keydown={() => showFocus(3)}>
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>Competency Development</h5>
			{#if isFocus[3]}
			<p class="grey" in:fly={{x: 0, y: 200, duration: 300}}>
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
			</p>
			{/if}
		</div>
    <div class="boxof2by2four carded fiticon" use:reveal={{ delay: 150}} on:click={() => showFocus(4)} on:keydown={() => showFocus(4)}>
			<img src="/images/icon-ld.png" alt="icon" />
			<h5>Learning Design</h5>
			{#if isFocus[4]}
			<p class="grey" in:fly={{x: 0, y: 200, duration: 300}}>
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
			</p>
			{/if}
		</div>
  </div>
</div>

<div class="dynamicwithtitleand3by2double padstd box4 fluid lineit">
	<div class="titleof3by2dyn centercalib">
		<h2 class="titleis" use:reveal>
			IKS Primers
		</h2>
	</div>
	<div class="boxof3by2dynsingle">
		{#if articles && articles.length > 0}
			{#each articles as item, i}
				<div class="boxc carded" use:reveal={{ delay: i*50}}>
					<h5><a href={item.link}>{item.name}</a></h5>
					<small class="grey">{item.author}</small>
				</div>
			{/each}
		{/if}
	</div>
	<div class="boxof3by2dyndouble">
		{#if homes && homes.length > 0}
			{#each homes as item, i}
				<div class="boxc a-vid" use:reveal={{ delay: i*60}}>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					<p class="grey">{item.name}</p>	
				</div>
			{/each}
		{/if}
	</div>
	<div class="loadbutton">
		<button class="btn1 btn01" on:click={loadMore} on:keydown={loadMore}>Load More</button>
	</div>
</div>

<div class="dynamicwithtitleand3by2 padstd box5 fluid lineit">
	<div class="titleof3by2dyn centercalib">
		<h2 class="titleis" use:reveal>
			IKS Roadmap and Strategy
		</h2>
	</div>
	<div class="boxof3by2dyn">
		{#if videos && videos.length > 0}
			{#each videos as item, i}
				<div class="boxc a-vid" use:reveal={{ delay: i*60}}>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					<p class="grey">{item.name}</p>	
				</div>
			{/each}
		{/if}
	</div>
</div>

<div class="containerwithtitleandunknown padstd fluid box6 lineit">
	<div class="titleofunknown centercalib">
		<h2 class="titleis" use:reveal>Partners</h2>
	</div>
	<div class="unknown">
		{#if partners && partners.length > 0}
			{#each partners as item}
				<div class="boxc fit">
					<a href={item.link} target="_blank" rel="noreferrer"><img class="brandlogo" src={item.image} alt={item.name}/></a>
				</div>
			{/each}
		{/if}
	</div>
</div>

</div>


<style lang="sass">

.box10
	.bodyarea
		padding-top: 32px
		padding-bottom: 32px
		display: flex
		flex-direction: column
		row-gap: 32px
		p
			color: #878787

.bulletinfilters p
	text-transform: uppercase
	padding: 3px 9px
	cursor: pointer
	&:hover
		background: var(--bluea)
		color: white

.bulletinfilters p.selectedfilter
	background: var(--blueb)
	color: white
	&:hover
		background: #676767
		cursor: none

.a-vid
	@media screen and (min-width: 1024px)
		height: 280px
		iframe
			height: 200px
	@media screen and (max-width: 1023px)
		height: 240px !important
		iframe
			height: 200px !important

.box20
	height: 100vh
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	align-content: end
	justify-items: center
	h1
		background: #602C2D
		color: white
		padding: 4px 32px
	h5
		background: var(--niti)
		color: white
		padding: 5px	
	@media screen and (max-width: 575px)
		height: 60vh


.scrollsnapper
	scroll-snap-type: y mandatory

.img1, .padstd
	scroll-snap-align: start

.img1
	background-image: url('/images/about-parambika.png')
	height: 100vh
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	@media screen and (max-width: 575px)
		height: 50vh

.box1
	@media screen and (min-width: 1024px)
		height: 100vh
		align-items: center
	@media screen and (max-width: 1023px)
		img
			object-fit: cover
			height: 280px
			width: 100%


.box3
	.boxof2by2dyn
		width: 100%


.box4
	.titleof2by2	
		text-align: center
		display: flex
		flex-direction: column
		align-items: center
		text-align: center
	.boxof2by2
		align-items: start
		padding-left: 4vw
		padding-right: 4vw
		gap: 24px 48px
		.carded
			h5
				cursor: pointer
				&:hover
					color: var(--niti)
	.fiticon
		display: flex
		flex-direction: column
		img
			margin: auto
			text-align: center
		h5
			text-align: center
	@media screen and (max-width: 1024px)
		.boxof2by2
			width: 100%
			iframe
				width: 100%

</style>