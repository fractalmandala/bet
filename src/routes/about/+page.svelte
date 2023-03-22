<script lang="ts">
import { onMount } from 'svelte'
import { getCourses, getYoutube, getIKSEvents, getArticles } from '$lib/utils/supapulls'
let courses:any
let videos:any
let events:any
let articles:any

onMount(async() => {
	courses = await getCourses()
	videos = await getYoutube()
	events = await getIKSEvents()
	articles = await getArticles()
})

</script>

<div class="simplecontainer padstd box1 aligncenter fluid topbox">

		<h2 class="bluea serif wide75">
			The application of IKS throughout curricula is essential to the preservation of our civilizational memory.
		</h2>

		<h5 class="w400 grey wide75">
			We partner with public and private institutions on IKS implementation, participate in and facilitate programs, and undertake awareness activities. We believe that the IKS (Indian Knowledge System) is critical to reimagining how multiple strands of knowledge are viewed.
		</h5>

</div>


<div class="containerof2by2withtitle padstd box2 fluid lineit">
  <div class="titleof2by2">
		<h2 class="titleis">Focus Areas</h2>
	</div>
  <div class="boxof2by2">
    <div class="boxof2by2one fiticon">
			<img src="/images/icon-curr.png" alt="icon" />
			<h5>Curriculum Building</h5>
			<p class="grey">
				Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
			</p>
		</div>
    <div class="boxof2by2two fiticon">
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>NEP-IKS Implementation</h5>
			<p class="grey">
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
			</p>
		</div>
    <div class="boxof2by2three fiticon">
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>Competency Development</h5>
			<p class="grey">
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
			</p>
		</div>
    <div class="boxof2by2four fiticon">
			<img src="/images/icon-ld.png" alt="icon" />
			<h5>Learning Design</h5>
			<p class="grey">
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
			</p>
		</div>
  </div>
</div>

<div class="dynamicwithtitleand4grid padstd box3 fluid lineit">
	<div class="titleof4dyn">
		<h2 class="titleis">
			Bṛhat Draṣṭā
		</h2>
	</div>
	<div class="boxof4dyn">
		{#if courses && courses.length > 0}
			{#each courses as item}
				<div class="boxc">
					<div class="imageinbox fit boxc">
						<img class="cardimage" src={item.image} alt={item.name} />
					</div>
					<div class="detailsbox boxc">
						<div class="boxr meta">
							<small class="grey">{item.datefrom}</small>
							<small class="grey">{item.status}</small>
						</div>
						<h5 class="capitalize">{item.name}</h5>
						<p class="grey">{item.content.slice(0,200)}...</p>
						<button class="btn1 btn01"><a href="/drashta/{item.course}">Visit Page</a></button>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<div class="dynamicwithtitleand3by2 padstd box4 fluid lineit">
	<div class="titleof3by2dyn">
		<h2 class="titleis">Events We Have Partnered On</h2>
	</div>
	<div class="boxof3by2dyn">
		{#if events && events.length > 0}
			{#each events as item}
				<div class="boxc">
					<h5>{item.name}</h5>
					<p class="grey">{item.about.slice(0,400)}...</p>
					<div class="boxc capitalize">
						<small>Dates: {item.dates}</small>
						<small>Venue: {item.venues}</small>
						<small>Themes: {item.themes}</small>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>


<style lang="sass">
.box1
	h2
		border-top: 1px solid #d7d7d7
		padding-top: 32px
	@media screen and (min-width: 1024px)
		height: 100vh
		align-content: center

.meta, .capitalize
	small
		font-size: 12px
		text-transform: uppercase
		font-weight: bold
		
.detailsbox
	.boxr
		gap: 12px
		margin-bottom: 8px

.box4
	.boxof3by2dyn
		.boxc
			.capitalize
				padding-bottom: 16px
				border-bottom: 1px solid #d7d7d7
</style>