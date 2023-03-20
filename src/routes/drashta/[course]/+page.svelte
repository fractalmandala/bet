<script lang="ts">
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { courseContents, courseDetails, courseTakeaways, courseInstructor } from '$lib/utils/supapulls'
import { page } from '$app/stores'
let dynamizer = ''
let coursecontents:any
let coursedetails:any
let coursetakeaways:any
let courseinstructor:any
let selectedLabel:boolean[] = [false, false, false]
let y:any = 0

function toggleLabel(index:number) {
	selectedLabel[index] = !selectedLabel[index]
	for ( let i = 0; i < selectedLabel.length; i++ ) {
		if ( i !== index && selectedLabel[i] == true ) {
			selectedLabel[i] = false
		}
	}
}

export let data:any
let x:any


onMount(async() => {
	x = $page.url.pathname.substr(9,40)
	dynamizer = x
	coursedetails = await courseDetails(dynamizer)
	coursecontents = await courseContents(dynamizer)
	coursetakeaways = await courseTakeaways(dynamizer)
	courseinstructor = await courseInstructor(dynamizer)
})
</script>

<svelte:window bind:scrollY={y}/>
<div class="containerwithwidecolumn padstd typ height100 aligncenter box1 topbox">
	<div class="columnleft">
		<h1 class="capitalize pb16">{data.name}</h1>
		<div class="boxr uppercase">
				<p>{data.datefrom}</p>
				<p class="bluea">{data.status}</p>
		</div>
	</div>
	<div class="columnright fit">
		<img src={data.image} alt={data.name} />
	</div>
</div>
<div class="dynamictopgridof3 padstd typ box2">
  <div class="dyngridof3 pb16">
		{#if coursedetails && coursedetails.length > 0}
			{#each coursedetails as item}
				<div class="boxc fiticon cutmargins typ3">
					<img src={item.image} alt={item.name} />
					<p>{item.content}</p>
					<small class="uppercase">{item.name}</small>
				</div>
			{/each}
		{/if}
  </div>
  <div class="dynbottom">
		<h5 class="w400">{data.content}</h5>
	</div>
</div>
<div class="coursebody padstd typ box3">
	<div class="boxr selectionstrip">
		<div class="label" on:click={() => toggleLabel(1)} on:keydown={() => toggleLabel(1)}>
			Contents
		</div>
		<div class="label" on:click={() => toggleLabel(2)} on:keydown={() => toggleLabel(2)}>
			Takeaways
		</div>
		<div class="label" on:click={() => toggleLabel(3)} on:keydown={() => toggleLabel(3)}>
			Instructor
		</div>
	</div>
	<div class="selectedcontent">
		{#if selectedLabel[1]}
			{#if coursecontents && coursecontents.length > 0}
				{#each coursecontents as item, i}
					<div class="boxc typ2" in:fly={{ duration: 80, delay: i * 80, x: 0, y: 48}}>
						<p class="capitalize">{item.name}</p>
						{#if item.content && item.content.length > 0}
							<small>{item.content}</small>
						{/if}
					</div>
				{/each}
			{/if}
		{/if}
		{#if selectedLabel[2]}
			{#if coursetakeaways && coursetakeaways.length > 0}
				{#each coursetakeaways as item, i}
					<div class="boxc typ2" in:fly={{ duration: 80, delay: i * 80, x: 0, y: 48}}>
						<p>{item.name}</p>
						<small >{item.content}</small>
					</div>
				{/each}
			{/if}
		{/if}
		{#if selectedLabel[3]}
			{#if courseinstructor && courseinstructor.length > 0}
				{#each courseinstructor as item, i}
					<div class="boxr typ2 cardimage" in:fly={{ duration: 80, delay: i * 80, x: 0, y: 48}}>
						<img src={item.image} alt={item.name} />
						<small >{item.content}</small>
					</div>
				{/each}
			{/if}
		{/if}
	</div>
</div>


<style lang="sass">

.boxc.cutmargins
	align-items: center

.dyngridof3
	justify-content: center
	justify-items: center

.box1 h1
	border-bottom: 1px solid #e7e7e7

.box1
	.boxr
		gap: 16px

.box1
	z-index: 0

.box2
	background: white
	z-index: 10

.coursebody
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	grid-template-rows: auto auto
	grid-template-areas: "selectionstrip" "selectedcontent"
	gap: 0 0
	.selectionstrip
		grid-area: selectionstrip
		border-top: 1px solid #f1f1f1
		border-bottom: 1px solid #f1f1f1
		justify-content: center
		gap: 48px
		.label
			transition: all 0.08s var(--cubec)
			padding-left: 8px
			padding-right: 8px
			cursor: pointer
			transform-origin: center center
			&:hover
				background: var(--blueb)
				color: white
				transform: scale(0.9)
	.selectedcontent
		grid-area: selectedcontent
		min-height: 70vh
		padding-bottom: 48px
		padding-top: 32px
		.cardimage
			gap: 32px
			margin-bottom: 64px
		@media screen and (min-width: 1024px)
			padding-left: 16vw
			padding-right: 16vw

</style>