<script lang="ts">
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import PaymentForm from '$lib/components/PaymentForm.svelte'
import { nitividhanaOverview, nitividhanaTopics, nitividhanaQual, nitividhanaTopicsOverview, nitiDay1, nitiDay2, nitiDay3, nitiDay4, nitividhanaWhoFor } from '$lib/utils/supapulls'
let overviews:any
let topics:any
let quals:any
let whos:any
let topicsover:any
let day1items:any
let day2items:any
let day3items:any
let day4items:any
let selectedLabel:boolean[] =Array(3).fill(false)
selectedLabel[1] = true
let selectedDay:boolean[] = [false, false, false, false]
let selectedlabelname:any = 'selectedlabelname'
let nonselected:any = 'nonselected'
let showModal:boolean = false
function toggleLabel(index:number) {
	selectedLabel[index] = !selectedLabel[index]
	for ( let i = 0; i < selectedLabel.length; i++ ) {
		if ( i !== index && selectedLabel[i] == true ) {
			selectedLabel[i] = false
		}
	}
}

function toggleDay(index:number) {
	selectedDay[index] = !selectedDay[index]
	for ( let i = 0; i < selectedDay.length; i++ ) {
		if ( i !== index && selectedDay[i] == true ) {
			selectedDay[i] = false
		}
	}
}

onMount(async() => {
	overviews = await nitividhanaOverview()
	topics = await nitividhanaTopics()
	quals = await nitividhanaQual()
	whos = await nitividhanaWhoFor()
	topicsover = await nitividhanaTopicsOverview()
	day1items = await nitiDay1()
	day2items = await nitiDay2()
	day3items = await nitiDay3()
	day4items = await nitiDay4()
})
</script>


<div class="simplecontainer padstd box7 typ">
	<div class="boxc nitividhana background" style="background-image: url('/images/policywall.webp')">

	</div>
</div>

<div class="containerwithwidecolumn padstd box3 fluid">
	<div class="columnleft">
		<h1>Nītividhāna</h1>
		<h2 class="serif">
			In partnership with Chinmaya International Foundation, a four-day residential immersion program in the essentials of today's burning policy issues.
		</h2>
		<button class="btn1 btn01" on:click={() => (showModal = true)} on:keydown={() => (showModal = true)}>Register Now</button>
	</div>
	<PaymentForm bind:showModal></PaymentForm>
	<div class="columnright">
		<h5>
			11 - 14th May, 2023
		</h5>
		<h6 class="w400">
			<span class="nita"><b>Venue:</b></span><br>
			Chinmaya International Foundation, Adi Sankara Nilayam, Adi Sankara Marg, Veliyanad, Ernakulam, Kerala, 682313
		</h6>
		<div class="boxr">
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/15partners/cif.png" alt="cif" />
			<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/15partners/brhat.png" alt="brht"/>
		</div>
	</div>
</div>

<div class="simplecontainer padstd box2 fluid">
	<div class="boxc">
		{#if overviews && overviews.length > 0}
			{#each overviews as item}
				<h6 class="w400 wide75 grey">{item.keydimensions.slice(0,806)}</h6>
				<h6 class="w400 wide75 grey">{item.keydimensions.slice(806, 2000)}</h6>
			{/each}
		{/if}
		<p></p>
	</div>
</div>

<div class="simplecontainer padstd box4 fluid">
	<div class="selectionstrip boxr">
		<div class="label {selectedLabel[1] ? selectedlabelname : nonselected}" on:click={() => toggleLabel(1)} on:keydown={() => toggleLabel(1)}>
			Topics
		</div>
		<div class="label {selectedLabel[4] ? selectedlabelname : nonselected}" on:click={() => toggleLabel(4)} on:keydown={() => toggleLabel(4)}>
			Who Is It For
		</div>
		<div class="label {selectedLabel[2] ? selectedlabelname : nonselected}" on:click={() => toggleLabel(2)} on:keydown={() => toggleLabel(2)}>
			Criteria and Details
		</div>
		<div class="label {selectedLabel[3] ? selectedlabelname : nonselected}" on:click={() => toggleLabel(3)} on:keydown={() => toggleLabel(3)}>
			Schedule
		</div>
		<div class="label2 {selectedLabel[5] ? selectedlabelname : nonselected}" on:click={() => (showModal = true)} on:keydown={() => (showModal = true)}>Register</div>
	</div>
	<div class="selectedcontent">
		{#if selectedLabel[1]}	
			{#if topicsover && topicsover.length > 0}
				{#each topicsover as item, i}
					<div class="boxc typ3" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
						<h6 class="w400 pb16">{item.keydimensions}</h6>
					</div>
				{/each}
			{/if}
			{#if topics && topics.length > 0}
				{#each topics as item, i}
					<div class="boxc typ2">
						<h6 in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>{item.sessionorname}</h6>
					</div>
				{/each}
			{/if}
		{/if}
		{#if selectedLabel[2]}
			{#if quals && quals.length > 0}
				<div class="boxof3by2dyn">
					{#each quals as item, i}
						<div class="boxc typ2" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
							<h6 class="holdline">{item.sessionorname}</h6>
							<small>{item.keydimensions}</small>
						</div>
					{/each}
				</div>
			{/if}
		{/if}
		{#if selectedLabel[3]}
			<p>Click on any day to expand details</p>
			{#if day1items && day1items.length > 0}
				<div class="typ">
					<h5 class="nita pb16 pointer" on:click={() => toggleDay(1)} on:keydown={() => toggleDay(1)} in:fly={{ duration: 100, x: 0, y: 48, delay: 0}}>Day 1</h5>
				</div>
				{#if selectedDay[1]}
				{#each day1items as item, i}
					<div class="boxc sched typ2" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
						<div class="nita">{item.time}</div>
						{#if item.sessionorname.length > 0 && item.sessionorname === 'Break'}
							<p>{item.sessionorname}</p>
						{:else}
							<p>{item.sessionorname}</p>
							<small>Key Dimensions: {item.keydimensions}</small>
							<small>Speaker(s): {item.speakers}</small>
						{/if}
					</div>
				{/each}
				{/if}
			{/if}
			{#if day2items && day2items.length > 0}
				<div class="typ">
					<h5 class="nita pb16 pointer" on:click={() => toggleDay(2)} on:keydown={() => toggleDay(2)} in:fly={{ duration: 100, x: 0, y: 48, delay: 50}}>Day 2</h5>
				</div>
				{#if selectedDay[2]}
				{#each day2items as item, i}
					<div class="boxc sched typ2" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
						<div class="nita">{item.time}</div>
						<p>{item.sessionorname}</p>
						<small>Key Dimensions: {item.keydimensions}</small>
						<small>Speaker(s): {item.speakers}</small>
					</div>
				{/each}
				{/if}
			{/if}
			{#if day3items && day3items.length > 0}
				<div class="typ">
					<h5 class="nita pb16 pointer" on:click={() => toggleDay(3)} on:keydown={() => toggleDay(3)} in:fly={{ duration: 100, x: 0, y: 48, delay: 100}}>Day 3</h5>
				</div>
				{#if selectedDay[3]}
				{#each day3items as item, i}
					<div class="boxc sched typ2" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
						<div class="nita">{item.time}</div>
						<p>{item.sessionorname}</p>
						<small>Key Dimensions: {item.keydimensions}</small>
						<small>Speaker(s): {item.speakers}</small>
					</div>
				{/each}
				{/if}
			{/if}
			{#if day4items && day4items.length > 0}
				<div class="typ">
					<h5 class="nita pb16 pointer" on:click={() => toggleDay(4)} on:keydown={() => toggleDay(4)} in:fly={{ duration: 100, x: 0, y: 48, delay: 150}}>Day 4</h5>
				</div>
				{#if selectedDay[4]}
				{#each day4items as item, i}
					<div class="boxc sched typ2" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
						<div class="nita">{item.time}</div>
						<p>{item.sessionorname}</p>
						<small>Key Dimensions: {item.keydimensions}</small>
						<small>Speaker(s): {item.speakers}</small>
					</div>
				{/each}
				{/if}
			{/if}
		{/if}
		{#if selectedLabel[4]}	
			{#if whos && whos.length > 0}
				<div class="boxof3by2dyn">
				{#each whos as item, i}
					<div class="boxr typ3" in:fly={{ duration: 100, x: 0, y: 48, delay: i * 50}}>
						<img src={item.sessionorname} alt={item.id}/>
						<div class="boxc">
							<h6>{item.speakers}</h6>
							<p>{item.keydimensions}</p>
						</div>
					</div>
				{/each}
				</div>
			{/if}
		{/if}
	</div>
</div>


<style lang="sass">

.holdline
	border-top: 1px solid #d7d7d7
	padding-top: 16px

.selectedlabelname
	background: var(--nita)
	color: white

.sched
	margin-bottom: 24px
	border-top: 1px solid #f1f1f1
	padding-top: 16px
	small, p
		margin: 0
		padding: 0
	.nita
		font-size: 12px

.typ
	.nita.pb16
		border-top: 1px solid #d7d7d7
		padding-top: 16px

.nitividhana
	align-items: center
	justify-content: flex-end
	padding-bottom: 64px
	.textofniti
		text-align: center
		width: 60%
		padding: 16px 0
		h1
			background: #DE8634
			color: white
			padding: 8px
			font-size: 48px
			text-transform: uppercase
			margin: 0
		h3
			background: #ECA51B
			color: white
			text-transform: uppercase
			padding: 6px
		h4
			background: #DE8634
			color: white
	@media screen and (max-width: 899px)
		.textofniti
			width: 90%

.box7
	height: 100vh

.box3
	.columnright h5
		background: #DE8634
		color: white
		padding: 4px 8px
	.columnright
		padding-top: 32px
		.boxr
			margin-top: 32px
			border-top: 1px solid #e1e1e1
			padding-top: 24px
			gap: 24px
			img
				object-fit: contain
				height: 60px
				width: 60%

.box2
	.boxc
		border-top: 1px solid #e1e1e1
		padding-top: 48px

.box4
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
		justify-content: start
		gap: 48px
		@media screen and (max-width: 1023px)
			gap: 4px
		.label
			transition: all 0.08s var(--cubec)
			padding-left: 2px
			padding-right: 2px
			cursor: pointer
			transform-origin: center center
			text-align: center
			&:hover
				background: var(--nita)
				color: white
				transform: scale(0.9)
		.label2
			transition: all 0.08s var(--cubec)
			padding-left: 2px
			padding-right: 2px
			cursor: pointer
			transform-origin: center center
			text-align: center
			background: var(--niti)
			color: white
			&:hover
				background: white
				color: var(--niti)
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
			padding-right: 16vw

.selectedcontent
	.boxr.typ3
		gap: 24px
		img
			object-fit: contain
			height: 80px
			width: 80px
		.boxc
			width: calc(100% - 104px)
			h6
				margin: 0
				border-top: 1px solid #e1e1e1
				padding-top: 16px
			p
				color: #878787

</style>