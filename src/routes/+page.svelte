<script>
import { blur } from 'svelte/transition'
let y = 1
let blank = true

function toggleBlank(){
	blank = !blank
}
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
export async function getEvents(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','event')
	.order('sequence',{ascending: false})
	.limit(4)
	if (error) throw new Error(error.message)
	return data
}
export async function getVideos(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('bettag',true)
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}
export async function getPartners(){
	const { data, error } = await supabase
	.from('brhat-about')
	.select()
	.eq('type','betpartner')
	.eq('sequence',1)
	.limit(5)
	if (error) throw new Error(error.message)
	return data
}
</script>

<svelte:window bind:scrollY={y}/>
<div class="boxc ff img1">
</div>

<!-- introduction, our vision, image of students-->
<div class="ourvision padstd">
  <div class="imageinside">
		<img src="/images/imageforkey.webp" alt="indian students studying" />
	</div>
  <div class="textinside">
	<div class="spline grey2">
		<h4>OUR VISION</h4>
	</div>
	<h1 class="isred serif">
			Within the next 15 years,
	</h1>
	<div class="spline">
		<h3 class="w600">
			no child should finish education without being familiarized to Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having accessed Itihāsa-Purāṇa.
		</h3>
	</div>
	</div>
</div>


<!-- introductory links and subsections-->
<div class="introtowork padstd spline bdr">
  <div class="header-std wd75">
		<h3>At Bṛhat, we conceptualize IKS as a universal episteme, which is rooted in and derived from our millennia-long civilizational knowledge and values.</h3>
	</div>
</div>

<div class="image-box actionsimage padstd">
	<img src="/images/newimages/brhatactions.png" alt="title" />
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


<div class="events padstd">
  <div class="header40 spline">
		<h2>Recent and Upcoming Events</h2>
	</div>
  <div class="eventsgrid">
		{#await getEvents()}
		<small>...</small>
		{:then data}
		{#each data as item}
		<div class="card eventscard flex">
			<img src={item.image} alt={item.name} />
			<h5>{item.name}</h5>
			<small>{item.text.slice(0,300)}...</small>
			<button><a href={item.link} target="_blank" rel="noreferrer">Visit to Know More</a></button>
		</div>
		{/each}
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>

<div class="focusareas padstd">
  <div class="header-2 spline">
		<h2>Focus Areas</h2>
	</div>
  <div class="squaregrid flex">
		<div class="box1 card">
			<img class="icon" src="/images/icon-curr.png" alt="icon" />
			<div class="spline">
				<h4 class="isred">Curriculum Building</h4>
			</div>
				<p>
					Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
				</p>
		</div>
		<div class="box2 card">
							<img class="icon" src="/images/icon-nep.png" alt="icon" />
			<div class="spline">
				<h4 class="isred">NEP-IKS Implementation</h4>
			</div>
				<p>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
				</p>
		</div>
		<div class="box3 card">
			<img class="icon" src="/images/icon-nep.png" alt="icon" />
				<div class="spline">
				<h4 class="isred">Competency Development</h4>
				</div>
				<p>
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
				</p>
			</div>
		<div class="box4 card">
							<img class="icon" src="/images/icon-ld.png" alt="icon" />
				<div class="spline">
				<h4 class="isred">Learning Design</h4></div>
				<p>
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
				</p>
			</div>
	</div>
</div>

<div class="iksprimers padstd">
  <div class="header3 spline">
		<h2>IKS Primers</h2>
	</div>
  <div class="postsgrid">
			{#await getArticles()}
			<small>...</small>
			{:then data}
			
				{#each data as item}
				<div class="boxc card">
					<div class="spline">
					<h5><a href={item.link}>{item.name}</a></h5>
					</div>
					<small class="grey2">{item.author}</small>
				</div>
				{/each}
		
			{:catch error}
			<pre>{error}</pre>
			{/await}
	</div>
</div>

<div class="iksvideos padstd">
  <div class="header4 spline">
		<h2>The IKS Roadmap and Strategy</h2>
	</div>
  <div class="vidsgrid">
				{#await getVideos()}
		<small>...</small>
		{:then data}

			{#each data as item}
			<div class="item-box card">
				<iframe width="100%" height="80%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
				<small>{item.name}</small>			
			</div>
			{/each}

		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>

<div class="container-5 padstd">
  <div class="header5 spline">
		<h2>Our Partners</h2>
	</div>
  <div class="partners">
		{#await getPartners()}
		<small>..</small>
		{:then data}

			{#each data as item}
			<div class="partnersbox">
				<a href={item.link} target="_blank" rel="noreferrer"><img src={item.image} alt={item.name}/></a>
			</div>
			{/each}

		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
</div>


<style>

.image-box { height: 60vh; width: 100%; background-repeat: no-repeat; background-position: center center; background-size: cover; justify-self: center; place-self: center; margin-left: 64px; }
@media screen and (max-width: 1023px) {
	.image-box {
		padding: 0;
		margin-left: 0;
		height: 40vh;
	}
	.image-box img {
		width: 100%;
	}
}

.image-box img {
	object-fit: contain;
	height: 100%;
}
.chinmaya { height: 100vh; background-repeat: no-repeat; background-position: center center; background-size: cover; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 80px;}
.chinmaya h2, .chinmaya h4 { margin: 0;}

.chinmaya h2 {
	text-align: center;
	background-color: rgba(0,0,0,0.8);
	padding: 8px 16px;
	color: white;
	text-transform: uppercase;
}
.chinmaya h4 {
		text-align: center;
	background-color: rgba(0,0,0,0.8);
	color: white;
padding: 0px 16px 8px 16px;
}
.chinmaya h5 {
	background: #E4A503;
	color: white;
	padding: 4px 16px;
	text-transform: uppercase;
	margin: 0;
	font-size: 2rem;
	text-align: center;
}

.events {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header40"
    "eventsgrid";
}

.eventscard img { object-fit: cover; width: 100%; height: 240px; object-position: center center;}

.header40 { grid-area: header40;margin-top: 64px; }

.eventsgrid {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 64px 64px;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."
		". .";
  grid-area: eventsgrid;
}



.events h5 { text-transform: capitalize;}

.leftcol a:hover, .midcol a:hover, .rightcol a:hover { color: white;}

.img1 { z-index: 999; background-image: url('/images/about-parambika.png'); height: 100vh; background-size: cover; background-position: center center; background-repeat: no-repeat;}
.motif img { object-fit: contain; width: 160px; height: 160px;}
.partnersbox img {
	object-fit: contain;
	width: 90px;
}

.container-grid {  display: none;
  grid-template-columns: 0.7fr 1.6fr 0.7fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "leftcol midcol rightcol"
    "leftcol midcol rightcol"
    "leftcol midcol rightcol";
}

.leftcol {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "dharma"
    "drishti"
    "disha";
  grid-area: leftcol;
}


.midcol {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "education1"
    "remaining"
    "education2";
  grid-area: midcol;
	margin-left: 32px;
	margin-right: 32px;
}

.remaining {  display: grid;
  grid-template-columns: 0.8fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 32px;
  grid-auto-flow: row;
  grid-template-areas:
    "motif curriculum learning";
  grid-area: remaining;
}

.rightcol {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "reversing"
    "nepiks"
    "changingdrishti";
  grid-area: rightcol;
}




@keyframes imageshow {
	0% {
		background-image: none;
		border: 1px solid transparent;
		background-color: #f7f7f7;
		border-radius: 4px;
	}
	100% {
		background-image: url('/images/motifblank.png');
		border: 1px solid var(--red);
		background-color: transparent;
		border-radius: 50px;
	}
}
.dharma, .drishti, .disha, .education1, .education2, .curriculum, .learning, .reversing, .nepiks, .changingdrishti {
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
	display: inline-grid;
	border: 1px solid transparent;
	background-color: #f7f7f7;
	border-radius: 4px;
}

.dharma:hover, .drishti:hover, .disha:hover, .education1:hover, .education2:hover, .curriculum:hover, .learning:hover, .reversing:hover, .nepiks:hover, .changingdrishti:hover {
	animation: imageshow 0.13s cubic-bezier(0.720, -0.295, 1.000, -0.500) forwards;
}
.dharma h5, .drishti h5, .disha h5, .curriculum h5, .learning h5, .reversing h5, .nepiks h5, .changingdrishti h5, .education1 h5, .education2 h5 { margin: 0; background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 8px; transition: all 0.24s var(--cube1); cursor: pointer; font-size: 1.2rem; text-transform: uppercase; text-align: center;}
.dharma:hover h5, .drishti:hover h5, .disha:hover h5, .curriculum:hover h5, .learning:hover h5, .reversing:hover h5, .nepiks:hover h5, .changingdrishti:hover h5, .education1:hover h5, .education2:hover h5 { border-radius: 0; background: var(--red); color: white;} 

.dharma { grid-area: dharma; }

.drishti { grid-area: drishti; }

.disha { grid-area: disha; }

.education1 { grid-area: education1; }

.education2 { grid-area: education2; }


.motif { grid-area: motif;}
.curriculum { grid-area: curriculum;}
.learning { grid-area: learning;}


.reversing { grid-area: reversing; }

.nepiks { grid-area: nepiks; }

.changingdrishti { grid-area: changingdrishti; }


.introtowork {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header-std";
	align-items: start;
	align-content: start;
}

.header-std { grid-area: header-std;}

.ourvision {  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  grid-template-rows: 1fr;
  gap: 0px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    "imageinside textinside";
	padding-top: 32px;
	padding-bottom: 32px;
}

.imageinside { grid-area: imageinside; }
.imageinside img { object-fit: contain; width: 100%;}

.textinside { grid-area: textinside; }


.focusareas {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header-2"
    "squaregrid";
}

.header-2 { grid-area: header-2; margin-top: 64px;}

.squaregrid {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 32px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    "box1 box2"
    "box3 box4";
  grid-area: squaregrid;
}

.squaregrid img { object-fit: contain; height: 128px; width: 128px;}

.box1 { grid-area: box1; }

.box2 { grid-area: box2; }

.box3 { grid-area: box3; }

.box4 { grid-area: box4; }

.iksprimers {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header3"
    "postsgrid";
}

.header3 { grid-area: header3;margin-top: 64; }

.postsgrid {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . .";
  grid-area: postsgrid;
}



.iksvideos {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header4"
    "vidsgrid";
}



.header4 { grid-area: header4;margin-top: 64; }


.container-5 {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header5"
    "partners";
}

.header5 { grid-area: header5;margin-top: 64; }

.partners {  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . . .";
  grid-area: partners;
}
.vidsgrid {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . .";
  grid-area: vidsgrid;
}

.partners img { margin: auto; object-fit: contain; height: 160px; width: 100%;}

@media screen and (max-width: 767px) {

	.ourvision {  display: grid;
  	grid-template-columns: 1fr;
  	grid-template-rows: auto auto;
  	gap: 0px 0px;
  	grid-auto-flow: row;
  	grid-template-areas:
  	  "imageinside"
			"textinside";
		padding-top: 32px;
		padding-bottom: 32px;
	}



.container-grid {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "leftcol"
    "midcol"
    "rightcol";
}

.leftcol {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 0px 24px;
  grid-auto-flow: row;
  grid-template-areas: "dharma drishti disha";
  grid-area: leftcol;
	margin-bottom: 32px;
	justify-content: stretch;
}


.midcol {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 24px;
  grid-auto-flow: row;
  grid-template-areas: "education1 remaining education2";
  grid-area: midcol;
	margin-bottom: 32px;
	align-items: stretch;
	justify-content: stretch;
	justify-items: stretch;
}

.remaining {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 0;
  grid-auto-flow: row;
  grid-template-areas:
		"curriculum"
		"motif"
		"learning";
  grid-area: remaining;
}


	

.rightcol {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 0px 32px;
  grid-auto-flow: row;
  grid-template-areas: "reversing nepiks changingdrishti";
  grid-area: rightcol;
	justify-content: stretch;
}

.motif img { object-fit: contain; width: 100px; height: 100px; margin: auto;}


.dharma, .drishti, .disha, .education1, .education2, .curriculum, .learning, .reversing, .nepiks, .changingdrishti {
	background-position: center center;
	background-size: contain;
	background-repeat: no-repeat;
	justify-content: center;
	align-items: center;
	display: inline-grid;
	border: 1px solid transparent;
	background-color: #ffffff;
	border-radius: 4px;
}

.dharma:hover, .drishti:hover, .disha:hover, .education1:hover, .education2:hover, .curriculum:hover, .learning:hover, .reversing:hover, .nepiks:hover, .changingdrishti:hover {
	animation: imageshowmob 0.13s cubic-bezier(0.720, -0.295, 1.000, -0.500) forwards;
}

@keyframes imageshowmob {
	0% {
		background-image: none;
		border: 1px solid transparent;
		background-color: #f7f7f7;
		border-radius: 4px;
	}
	100% {
		background-image: url('/images/motifblank.png');
		border: 1px solid transparent;
		background-color: transparent;
		border-radius: 50px;
	}
}	

.dharma h5, .drishti h5, .disha h5, .curriculum h5, .learning h5, .reversing h5, .nepiks h5, .changingdrishti h5, .education1 h5, .education2 h5 { margin: 0; background: rgba(0,0,0,0.0); color: #272727; padding: 4px 8px; border-radius: 8px; transition: all 0.24s var(--cube1); cursor: pointer; font-size: 1rem; text-transform: capitalize; text-align: center;}
.dharma:hover h5, .drishti:hover h5, .disha:hover h5, .curriculum:hover h5, .learning:hover h5, .reversing:hover h5, .nepiks:hover h5, .changingdrishti:hover h5, .education1:hover h5, .education2:hover h5 { border-radius: 0; background: var(--red); color: white;
}

.postsgrid {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 0px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."
    ". ."
		". ."
		". .";
  grid-area: postsgrid;
}


.iksprimers {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header3"
    "postsgrid";
}

.squaregrid {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 32px 32px;
  grid-auto-flow: row;
  grid-template-areas:
    "box1" 
		"box2"
    "box3"
		"box4";
  grid-area: squaregrid;
}

.focusareas {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header-2"
    "squaregrid";
}

.iksvideos {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header4"
    "vidsgrid";
} 
.partners {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". .";
  grid-area: partners;
	justify-content: stretch;
	justify-items: stretch;
	padding-bottom: 64px;
}
	.partners img { margin-right: auto;}
.vidsgrid {  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto auto;
  gap: 24px 24px;
  grid-auto-flow: row;
  grid-template-areas:
    ". ."
    ". ."
		". ."
		". .";
  grid-area: vidsgrid;
}

.events {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header40"
    "eventsgrid";
}

.eventscard img { object-fit: cover; width: 100%; height: 200px; object-position: center center;}

.header40 { grid-area: header40;margin-top: 32px; }

.eventsgrid {  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  gap: 32px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "." "." ".";
  grid-area: eventsgrid;
}

.events h5 { text-transform: capitalize;}


	
}

</style>