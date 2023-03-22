<script lang="ts">
import { onMount, afterUpdate } from 'svelte'
import { reveal, setDefaultOptions } from 'svelte-reveal'
import { blur } from 'svelte/transition'
import { getRecent, getArticles, getYoutube, getPartners } from '$lib/utils/supapulls'
import AllBet from '$lib/components/AllBet.svelte'
let y = 1
let blank = true
let recents:any 
let articles:any
let videos:any
let partners: any

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
})
</script>

<svelte:window bind:scrollY={y}/>

<div class="scrollsnapper">

<div class="boxc ff img1">
</div>

<!-- introduction, our vision, image of students-->
<div class="containerwithrightcolumn padstd box1 aligncenter fluid lineit topbox">
  <div class="columnleft fit">
		<img src="/images/imageforkey.webp" alt="indian students studying" use:reveal />
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

<!-- introductory links and subsections-->


<div class="dynamicwithtitleand4grid padstd box3 fluid lineit">
  <div class="titleof4dyn centercalib">
		<h2 class="titleis" use:reveal>Recent and Upcoming</h2>
	</div>
  <div class="boxof4dyn">
		{#if recents && recents.length > 0}
			{#each recents as item, i}
			<div class="boxc carded" use:reveal={{ delay: i*100 }}>
				<div class="imageinbox fit boxc">
					<img class="cardimage" src={item.image} alt={item.name} />
				</div>
				<div class="detailsbox boxc">
					<h5>{item.name}</h5>
					<p class="grey">{item.text.slice(0,300)}...</p>
					<button class="btn1 btn01"><a href={item.link} target="_blank" rel="noreferrer">Visit</a></button>
				</div>
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
    <div class="boxof2by2one carded fiticon" use:reveal={{ delay: 0}}>
			<img src="/images/icon-curr.png" alt="icon" />
			<h5>Curriculum Building</h5>
			<p class="grey">
				Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
			</p>
		</div>
    <div class="boxof2by2two carded fiticon" use:reveal={{ delay: 50}}>
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>NEP-IKS Implementation</h5>
			<p class="grey">
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
			</p>
		</div>
    <div class="boxof2by2three carded fiticon" use:reveal={{ delay: 100}}>
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>Competency Development</h5>
			<p class="grey">
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
			</p>
		</div>
    <div class="boxof2by2four carded fiticon" use:reveal={{ delay: 150}}>
			<img src="/images/icon-ld.png" alt="icon" />
			<h5>Learning Design</h5>
			<p class="grey">
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
			</p>
		</div>
  </div>
</div>


<div class="dynamicwithtitleand3by2 padstd box4 fluid lineit">
	<div class="titleof3by2dyn centercalib">
		<h2 class="titleis" use:reveal>
			IKS Primers
		</h2>
	</div>
	<div class="boxof3by2dyn">
		{#if articles && articles.length > 0}
			{#each articles as item, i}
				<div class="boxc carded" use:reveal={{ delay: i*50}}>
					<h5><a href={item.link}>{item.name}</a></h5>
					<small class="grey">{item.author}</small>
				</div>
			{/each}
		{/if}
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
				<div class="boxc" use:reveal={{ delay: i*60}}>
					<iframe width="100%" height="80%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

.nitividhana
	align-items: center
	justify-content: flex-end
	padding-bottom: 64px
	.textofniti
		background: var(--bluea)
		color: white
		text-align: center
		width: 60%
		padding: 16px 0
	@media screen and (max-width: 899px)
		.textofniti
			width: 90%

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

.box1
	@media screen and (min-width: 1024px)
		height: 100vh
		align-items: center
	@media screen and (max-width: 1023px)
		img
			object-fit: cover
			height: 280px
			width: 100%

.box2
	min-height: 100vh
	.titlearea
		h4
			text-align: center
	@media screen and (min-width: 1024px)
		padding-bottom: 4rem

.box3
	.carded
		img
			object-position: center center


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

.box4
	.boxof3by2dyn
		@media screen and (max-width: 899px)
			grid-template-columns: 1fr
			grid-template-rows: auto
			grid-template-areas: "."

.box7, .box8
	height: 100vh

</style>