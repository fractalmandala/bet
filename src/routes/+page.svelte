<script lang="ts">
import { onMount, afterUpdate } from 'svelte'
import { reveal, setDefaultOptions } from 'svelte-reveal'
import { blur } from 'svelte/transition'
import { getRecent, getArticles, getYoutube, getPartners } from '$lib/utils/supapulls'
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
<div class="boxc ff img1">
</div>


<!-- introduction, our vision, image of students-->
<div class="containerwithtwocolumns padstd box1 aligncenter typ lineit topbox">
  <div class="columnleft fit">
		<img src="/images/imageforkey.webp" alt="indian students studying" />
	</div>
  <div class="columnright">
		<h6>OUR VISION</h6>
		<h1 class="serif mild">Within the next 15 years,</h1>
		<h5 class="w400">
			no child should finish education without being familiarized to Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having accessed Itihāsa-Purāṇa.
		</h5>
	</div>
</div>

<!-- introductory links and subsections-->
<div class="containerwithwidecolumn padstd box2 typ lineit">
	<div class="columnleft fit">
		<img src="/images/newimages/brhatactions.png" alt="title" />
	</div>
	<div class="columnright">
		<h4 class="pb16">At Bṛhat, we conceptualize IKS as a universal episteme, which is rooted in and derived from our millennia-long civilizational knowledge and values. Explore our framework here:</h4>
		<div class="hreflink"><a href="/docs/vastuandvaastu">Vastu and Vāstu</a></div>
		<div class="hreflink"><a href="/docs/shastrikaframework">Śāstrika Framework</a></div>
		<div class="hreflink"><a href="/docs/iksrepository">The Repository of IKS</a></div>
	</div>
</div>


<div class="dynamicwithtitleand4grid padstd box3 typ lineit">
  <div class="titleof4dyn">
		<h2 class="titleis" use:reveal>Recent and Upcoming</h2>
	</div>
  <div class="boxof4dyn">
		{#if recents && recents.length > 0}
			{#each recents as item}
			<div class="boxc">
				<div class="imageinbox fit boxc">
					<img class="cardimage" src={item.image} alt={item.name} />
				</div>
				<div class="detailsbox boxc">
					<h5>{item.name}</h5>
					<p>{item.text.slice(0,300)}...</p>
					<button><a href={item.link} target="_blank" rel="noreferrer">Visit</a></button>
				</div>
			</div>
			{/each}
		{/if}
  </div>
</div>

<!--
<div class="container-grid padstd spline" on:mouseenter={toggleBlank} on:mouseleave={toggleBlank}>
  <div class="leftcol">
    <div class="dharma">
			<h5><a href="/docs/vastuandvaastu">Dharma</a></h5>
		</div>
    <div class="drishti">
			<h5><a href="/docs/shastrikaframework">Dṛṣṭī</a></h5>
		</div>
    <div class="disha">
			<h5><a href="/docs/iksrepository">Diśā</a></h5>
		</div>
  </div>
  <div class="midcol">
    <div class="education1">
			<h5><a href="/docs/educationrooted">Education: Accessible, Inclusive and Rooted</a></h5>
		</div>
    <div class="education2">
			<h5><a href="/docs/educationasaportal/">Education as a Portal to Wellbeing</a></h5>
		</div>
    <div class="remaining">
			<div class="motif">
				{#if blank}
				<img src="/images/motifblank.png" alt="motiflogo2"/>
				{:else}
				<img src="/images/motifblack.png" alt="motiflogo"/>
				{/if}
			</div>
			<div class="curriculum">
				<h5><a href="/docs/curriculumbuilding">Curriculum</a></h5>
			</div>
			<div class="learning">
				<h5><a href="/engage">Learning</a></h5>
			</div>
		</div>
  </div>
  <div class="rightcol">
    <div class="reversing">
			<h5><a href="/docs/reversingthegaze">Reversing the Gaze</a></h5>
		</div>
    <div class="nepiks">
			<h5><a href="/docs/nepimplementation">NEP-IKS Implementation</a></h5>
		</div>
    <div class="changingdrishti">
			<h5><a href="/docs/brhataspartner">Changing the Dṛṣṭī</a></h5>
		</div>
  </div>
</div>
<div class="chinmaya spline" style="background-image: url('/images/policywall.webp')">
	<a href="/bootcamp">
	<h2>Public Policy</h2> 
	<h4>
	Bootcamp 2023</h4>
	<h5>
		11 - 14 May
	</h5></a>
</div>
-->

<div class="containerof2by2withtitle padstd box4 typ lineit">
  <div class="titleof2by2">
		<h2 class="titleis" use:reveal>Focus Areas</h2>
	</div>
  <div class="boxof2by2">
    <div class="boxof2by2one fiticon">
			<img src="/images/icon-curr.png" alt="icon" />
			<h5>Curriculum Building</h5>
			<p>
				Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
			</p>
		</div>
    <div class="boxof2by2two fiticon">
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>NEP-IKS Implementation</h5>
			<p>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
			</p>
		</div>
    <div class="boxof2by2three fiticon">
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>Competency Development</h5>
			<p>
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
			</p>
		</div>
    <div class="boxof2by2four fiticon">
			<img src="/images/icon-ld.png" alt="icon" />
			<h5>Learning Design</h5>
			<p>
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
			</p>
		</div>
  </div>
</div>


<div class="dynamicwithtitleand3by2 padstd box4 typ lineit">
	<div class="titleof3by2dyn">
		<h2 class="titleis" use:reveal>
			IKS Primers
		</h2>
	</div>
	<div class="boxof3by2dyn">
		{#if articles && articles.length > 0}
			{#each articles as item}
				<div class="boxc">
					<h5><a href={item.link}>{item.name}</a></h5>
					<small>{item.author}</small>
				</div>
			{/each}
		{/if}
	</div>
</div>

<div class="dynamicwithtitleand3by2 padstd box5 typ lineit">
	<div class="titleof3by2dyn">
		<h2 class="titleis" use:reveal>
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

<div class="containerwithtitleandunknown padstd typ box6 lineit">
	<div class="titleofunknown">
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


<style lang="sass">

.img1
	background-image: url('/images/about-parambika.png')
	height: 100vh
	background-size: cover
	background-repeat: no-repeat
	background-position: center center

.box1
	@media screen and (min-width: 1024px)
		height: 100vh

.box2
	@media screen and (min-width: 1024px)
		padding-bottom: 4rem

</style>