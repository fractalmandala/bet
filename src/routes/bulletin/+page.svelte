<script lang="ts">
import { onMount, afterUpdate } from 'svelte'
import { bulletin } from '$lib/utils/supapulls'
import { fly } from 'svelte/transition'
let fake = false
let isFocus:boolean[] = [false, false, false, false]
let bullets:any
let limit:number = 3
let value:any = 'Books'
let iW:number
let dropDown:boolean = false
let breakPoint:boolean

function fauxfake(){
	fake = !fake
}

function toggleDropDown(){
		dropDown = !dropDown
	}


function showFocus(index:number){
	isFocus[index] = !isFocus[index]
	for ( let i = 0; i < isFocus.length; i++ ) {
		if ( i !== index && isFocus[i] == true) {
			isFocus[i] = false
		}
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

$: if ( iW <= 1023 ) {
		breakPoint = true
	} else {
		breakPoint = false
	}


onMount(async() => {
	bullets = await bulletin(value)
	if ( iW <= 1023 ) {
			breakPoint = true
		}
})
</script>

<svelte:window bind:innerWidth={iW}/>

<div class="rta-column minH min is-padded rowgap-64 fluid lineit">
	<div class="rta-in-col ta-c col-cent light rowgap-16">
		<h2 class="titleis">IKS Bulletin</h2>
		{#if !breakPoint}
		<div class="rta-row colgap-24 bulletinfilters">
			<p on:click={() => setFilter('Conferences')} on:keydown={fauxfake} class="onefilter {value === 'Conferences' ? 'selectedfilter' : ''}">Conferences</p>
			<p on:click={() => setFilter('Careers')} on:keydown={fauxfake} class="onefilter {value === 'Careers' ? 'selectedfilter' : ''}">Careers</p>
			<p on:click={() => setFilter('Courses')} on:keydown={fauxfake} class="onefilter {value === 'Courses' ? 'selectedfilter' : ''}">Courses</p>
			<p on:click={() => setFilter('Books')} on:keydown={fauxfake} class="onefilter {value === 'Books' ? 'selectedfilter' : ''}">Books</p>
			<p on:click={() => setFilter('Events')} on:keydown={fauxfake} class="onefilter {value === 'Events' ? 'selectedfilter' : ''}">Events</p>
		</div>
		{/if}
		{#if breakPoint}
		<button class="button blue" on:click={toggleDropDown} on:keydown={fauxfake}>Select Update Type</button>
			{#if dropDown}
				<div class="rta-in-col rowgap-16" id="dropdown" on:click={toggleDropDown} on:keydown={fauxfake}>
					<h5 on:click={() => setFilter('Conferences')} on:keydown={fauxfake} class="onefilter {value === 'Conferences' ? 'selectedfilter' : ''}">Conferences</h5>
					<h5 on:click={() => setFilter('Careers')} on:keydown={fauxfake} class="onefilter {value === 'Careers' ? 'selectedfilter' : ''}">Careers</h5>
					<h5 on:click={() => setFilter('Courses')} on:keydown={fauxfake} class="onefilter {value === 'Courses' ? 'selectedfilter' : ''}">Courses</h5>
					<h5 on:click={() => setFilter('Books')} on:keydown={fauxfake} class="onefilter {value === 'Books' ? 'selectedfilter' : ''}">Books</h5>
					<h5 on:click={() => setFilter('Events')} on:keydown={fauxfake} class="onefilter {value === 'Events' ? 'selectedfilter' : ''}">Events</h5>
				</div>
			{/if}
		{/if}
	</div>
	<div class="rta-in-col rowgap-32">
		{#if bullets && bullets.length > 0}
			{#each bullets as item, i}
				<div class="rta-row row-col rowgap-16 colgap-24 bord-bot bot-p-16" in:fly={{ duration: 200, delay: i * 50}} out:fly={{ delay: 0, duration: 100}}>
					<div class="rta-image w32 height-30">
						<img src={item.image} alt={item.name} />
					</div>
					<div class="rta-in-col rowgap-16 text w64 light">
							<h5 style="color: #272727">{item.name}</h5>
							<p>{item.text}</p>
							<button class="button blue"><a href={item.link} target="_blank" rel="noreferrer">Visit</a></button>
						</div>
				</div>
			{/each}
		{/if}
	</div>

</div>
