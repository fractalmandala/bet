<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import { reveal, setDefaultOptions } from 'svelte-reveal';
	import { fly } from 'svelte/transition';
	import {
		getRecent,
		getArticles,
		getYoutube,
		getPartners,
		homeVideos,
		bulletin
	} from '$lib/utils/supapulls';
	let y = 1;
	let blank = true;
	let iW: number;
	let dropDown: boolean = false;
	let breakPoint: boolean;
	let fake = false;
	let recents: any;
	let articles: any;
	let videos: any;
	let partners: any;
	let homes: any;
	let value: string = 'Books';
	let limit: number = 3;
	let isFocus: boolean[] = [false, false, false, false];
	let bullets: any;

	function fauxfake() {
		fake = !fake;
	}

	function toggleDropDown() {
		dropDown = !dropDown;
	}

	function showFocus(index: number) {
		isFocus[index] = !isFocus[index];
		for (let i = 0; i < isFocus.length; i++) {
			if (i !== index && isFocus[i] == true) {
				isFocus[i] = false;
			}
		}
	}

	async function loadMoreVideos() {
		try {
			homes = await homeVideos(limit);
		} catch (error) {
			console.error('failed', error);
		}
	}

	function setFilter(newFilter: any) {
		value = newFilter;
	}

	$: if (value) {
		(async () => {
			bullets = await bulletin(value);
		})();
	}

	function loadMore() {
		limit += 3;
		loadMoreVideos();
	}

	setDefaultOptions({
		transition: 'fly',
		duration: 300,
		easing: 'easeInQuart',
		y: 48,
		blur: 0
	});

	$: if (iW <= 1023) {
		breakPoint = true;
	} else {
		breakPoint = false;
	}

	onMount(async () => {
		recents = await getRecent();
		articles = await getArticles();
		videos = await getYoutube();
		partners = await getPartners();
		homes = await homeVideos(limit);
		bullets = await bulletin(value);
		if (iW <= 1023) {
			breakPoint = true;
		}
	});
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={iW} />

<div class="boxc ff img1" />

<!-- introduction, our vision, image of students-->
<div class="rta-grid grid2 left rowgap-16 thirty is-padded colgap-32 minH aligncenter fluid lineit">
	<div class="rta-image">
		<img
			src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/bet/twochildren.webp"
			alt="indian students studying"
			use:reveal
		/>
	</div>
	<div class="rta-in-col rowgap-16" use:reveal>
		<h6 class="grey">OUR VISION</h6>
		<h1 class="serif">Within the</h1>
		<h1 class="serif forback">next 15 years,</h1>
		<h5 class="w400">
			<span class="maroon"> no child </span>should finish education without being familiarized to
			the Indian knowledge repository, with texts like Nāṭyaśastra, Tarkaśāstra, Yogasūtra and
			Aṣṭadhyāyī; and without having accessed Itihāsa-Purāṇa.
		</h5>
	</div>
</div>

<div class="rta-column minH min is-padded rowgap-64 fluid lineit">
	<div class="rta-in-col ta-c col-cent light rowgap-16">
		<h2 class="titleis" use:reveal>IKS Bulletin</h2>
		{#if !breakPoint}
			<div class="rta-row colgap-16 bulletinfilters">
				<p
					on:click={() => setFilter('Conferences')}
					on:keydown={fauxfake}
					class="onefilter {value === 'Conferences' ? 'selectedfilter' : ''}"
				>
					Conferences
				</p>
				<p
					on:click={() => setFilter('Careers')}
					on:keydown={fauxfake}
					class="onefilter {value === 'Careers' ? 'selectedfilter' : ''}"
				>
					Careers
				</p>
				<p
					on:click={() => setFilter('Courses')}
					on:keydown={fauxfake}
					class="onefilter {value === 'Courses' ? 'selectedfilter' : ''}"
				>
					Courses
				</p>
				<p
					on:click={() => setFilter('Books')}
					on:keydown={fauxfake}
					class="onefilter {value === 'Books' ? 'selectedfilter' : ''}"
				>
					Books
				</p>
				<p
					on:click={() => setFilter('Events')}
					on:keydown={fauxfake}
					class="onefilter {value === 'Events' ? 'selectedfilter' : ''}"
				>
					Events
				</p>
			</div>
		{/if}
		{#if breakPoint}
			<button class="button blue" on:click={toggleDropDown} on:keydown={fauxfake}
				>Select Update Type</button
			>
			{#if dropDown}
				<div
					class="rta-in-col rowgap-16"
					id="dropdown"
					on:click={toggleDropDown}
					on:keydown={fauxfake}
				>
					<h5
						on:click={() => setFilter('Conferences')}
						on:keydown={fauxfake}
						class="onefilter {value === 'Conferences' ? 'selectedfilter' : ''}"
					>
						Conferences
					</h5>
					<h5
						on:click={() => setFilter('Careers')}
						on:keydown={fauxfake}
						class="onefilter {value === 'Careers' ? 'selectedfilter' : ''}"
					>
						Careers
					</h5>
					<h5
						on:click={() => setFilter('Courses')}
						on:keydown={fauxfake}
						class="onefilter {value === 'Courses' ? 'selectedfilter' : ''}"
					>
						Courses
					</h5>
					<h5
						on:click={() => setFilter('Books')}
						on:keydown={fauxfake}
						class="onefilter {value === 'Books' ? 'selectedfilter' : ''}"
					>
						Books
					</h5>
					<h5
						on:click={() => setFilter('Events')}
						on:keydown={fauxfake}
						class="onefilter {value === 'Events' ? 'selectedfilter' : ''}"
					>
						Events
					</h5>
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-in-col rowgap-32">
		{#if bullets && bullets.length > 0}
			{#each bullets as item, i}
				<div
					class="rta-row row-col rowgap-16 colgap-24 bord-bot bot-p-16"
					use:reveal={{ delay: i * 20 }}
					in:fly={{ duration: 200, delay: i * 50 }}
					out:fly={{ delay: 0, duration: 100 }}
				>
					<div class="rta-image w32 height-30">
						<img src={item.image} alt={item.name} />
					</div>
					<div class="rta-in-col rowgap-16 text w64 light">
						<h5 style="color: #272727">{item.name}</h5>
						<p>{item.text}</p>
						<button class="button blue"
							><a href={item.link} target="_blank" rel="noreferrer">Visit</a></button
						>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<div class="rta-column rowgap-64 niti">
	<a href="https://brhat.in/nitividhana">
		<img src="/images/nitividhanahero.webp" alt="nitividhana" />
	</a>
</div>

<div class="rta-column is-padded minH rowgap-64 fluid lineit">
	<div class="rta-in-col">
		<h2 class="titleis ta-c-m" use:reveal>Focus Areas</h2>
	</div>
	<div class="rta-grid grid2 rowgap-32">
		<div
			class="rta-in-col col-cent-m rta-icon2"
			use:reveal={{ delay: 0 }}
			on:click={() => showFocus(1)}
			on:keydown={() => showFocus(1)}
		>
			<img src="/images/icon-curr.png" alt="icon" />
			<h5>Curriculum Building</h5>
			{#if isFocus[1]}
				<p class="grey" in:fly={{ x: 0, y: 200, duration: 300 }}>
					Bṛhat offers support for curriculum development. The principles of curriculum building in
					the Indian Knowledge System work differently as there is no separation or hierarchy of
					subjects or topics. This is equally true for pedagogies that are to be followed for
					IKS-based curriculum.
				</p>
			{/if}
		</div>
		<div
			class="rta-in-col col-cent-m rta-icon2"
			use:reveal={{ delay: 50 }}
			on:click={() => showFocus(2)}
			on:keydown={() => showFocus(2)}
		>
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>NEP-IKS Implementation</h5>
			{#if isFocus[2]}
				<p class="grey" in:fly={{ x: 0, y: 200, duration: 300 }}>
					One of the objectives of the National Education Policy is to use and integrate the Indian
					Knowledge Systems in curriculum and pedagogies across higher education institutions. Also,
					NEP implementation is not just about creating new courses but also to make students,
					faculty, staff and parents informed about the potential that IKS holds.
				</p>
			{/if}
		</div>
		<div
			class="rta-in-col col-cent-m rta-icon2"
			use:reveal={{ delay: 100 }}
			on:click={() => showFocus(3)}
			on:keydown={() => showFocus(3)}
		>
			<img src="/images/icon-nep.png" alt="icon" />
			<h5>Competency Development</h5>
			{#if isFocus[3]}
				<p class="grey" in:fly={{ x: 0, y: 200, duration: 300 }}>
					Any task of IKS integration and implementation would be insufficient if human resources in
					the respective areas are not created. Bṛhat has been partnering with AICTE on its various
					initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher
					educational institutions, and create a critical network of likeminded individuals, who
					further contribute to mainstreaming of IKS curriculum and pedagogies.
				</p>
			{/if}
		</div>
		<div
			class="rta-in-col col-cent-m rta-icon2"
			use:reveal={{ delay: 150 }}
			on:click={() => showFocus(4)}
			on:keydown={() => showFocus(4)}
		>
			<img src="/images/icon-ld.png" alt="icon" />
			<h5>Learning Design</h5>
			{#if isFocus[4]}
				<p class="grey" in:fly={{ x: 0, y: 200, duration: 300 }}>
					IKS integration and implementation would not be possible without thinking about it from a
					design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat
					envisages itself as a nodal agency, helping institutions digitize their curriculum and
					pedagogies, and also introducing learning designs that are compatible with IKS thinking.
					In addition to assisting institutions and organizations with the incorporation of IKS into
					their daily operations, Bṛhat wants to create in-house expertise in education, psychology,
					political-comparative philosophy and public policy. These three topics are central to
					Bṛhat's work and are therefore given priority for IKS redesign.
				</p>
			{/if}
		</div>
	</div>
</div>

<div class="rta-column is-padded minH min rowgap-64 fluid lineit">
	<div class="rta-in-col">
		<h2 class="titleis ta-c-m" use:reveal>IKS Primers</h2>
	</div>
	<div class="rta-grid grid3 colgap-32 rowgap-32">
		{#if articles && articles.length > 0}
			{#each articles as item, i}
				<div class="rta-in-col" use:reveal={{ delay: i * 50 }}>
					<h5><a href={item.link}>{item.name}</a></h5>
					<small class="grey">{item.author}</small>
				</div>
			{/each}
		{/if}
	</div>
	<div class="rta-grid grid3 colgap-32 rowgap-32">
		{#if homes && homes.length > 0}
			{#each homes as item, i}
				<div class="rta-video" use:reveal={{ delay: i * 60 }}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/{item.videoid}"
						title={item.name}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
					<small class="grey">{item.name}</small>
				</div>
			{/each}
		{/if}
	</div>
	<div class="loadbutton light">
		<button class="button blue" on:click={loadMore} on:keydown={loadMore}>Load More</button>
	</div>
</div>

<div class="rta-column is-padded minH rowgap-64 fluid lineit">
	<div class="rta-in-col">
		<h2 class="titleis ta-c-m" use:reveal>IKS Roadmap and Strategy</h2>
	</div>
	<div class="rta-grid grid3 rowgap-32 colgap-32">
		{#if videos && videos.length > 0}
			{#each videos as item, i}
				<div class="rta-video" use:reveal={{ delay: i * 60 }}>
					<iframe
						width="100%"
						height="100%"
						src="https://www.youtube.com/embed/{item.videoid}"
						title={item.name}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					/>
					<small class="grey">{item.name}</small>
				</div>
			{/each}
		{/if}
	</div>
</div>

<div class="rta-column is-padded rowgap-64 fluid lineit bot-p-64">
	<div class="rta-in-col">
		<h2 class="titleis ta-c-m" use:reveal>Partners</h2>
	</div>
	<div class="rta-grid grid5 rowgap-32 colgap-32">
		{#if partners && partners.length > 0}
			{#each partners as item}
				<div class="rta-image height-20">
					<a href={item.link} target="_blank" rel="noreferrer"
						><img class="brandlogo" src={item.image} alt={item.name} /></a
					>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="sass">

.niti
	a 
		img
			object-fit: cover
			width: 100%
	@media screen and (max-width: 768px)
		height: 50vh
		width: 100vw
		img
			height: 50vh
			width: 100vw
			object-fit: cover

#dropdown
	text-align: center
	padding-top: 16px

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

.img1
	background-image: url('/images/about-parambika.png')
	height: 100vh
	background-size: cover
	background-repeat: no-repeat
	background-position: center center
	@media screen and (max-width: 575px)
		height: 50vh

.rta-in-col p
	line-height: 1.6

</style>
