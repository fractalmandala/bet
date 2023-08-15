<script lang="ts">
	import { onMount } from 'svelte'
	import { samikshanaFaculty } from '$lib/utils/supapulls'

	let details:any

	onMount(async() => {
		details = await samikshanaFaculty()
	})

</script>

<div class="page-container fluid">
	<div class="titleplace">
		<h2>Schedule</h2>
	</div>
	<div class="quotesplacegrid content">
		{#if details && details.length > 0}
			{#each details as quote}
				<div class="smallest">
					<h5>{quote.name}</h5>
					<pre>{quote.content}</pre>
				</div>
			{/each}
		{/if}
	</div>
	<div class="bottomplace"></div>
</div>

<style lang="sass">

.page-container
	background: white
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	grid-template-rows: auto auto auto auto
	grid-template-areas: "titleplace" "quotesplace" "bodyplace" "bottomplace"
	gap: var(--long-d) 0
	align-content: start
	.titleplace
		grid-area: titleplace
		h2
			border-left: 8px solid var(--bluea)
			padding-left: 16px
	.quotesplacegrid
		grid-area: quotesplace
		display: grid
		grid-auto-flow: row
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "." "."
		gap: var(--long-d) var(--wide-f)
		h5
			padding-bottom: 8px
			margin: 0
			text-transform: capitalize
		pre
			color: #878787
	.bodyplace
		grid-area: bodyplace
		display: flex
		flex-direction: column
		row-gap: var(--long-c)
		h6
			padding-top: var(--long-d)
			border-top: 1px solid #e1e1e1
		.introsplace
			border-top: 4px solid var(--bluea)
			padding-top: var(--long-d)
			display: flex
			flex-direction: column
			h4
				text-transform: capitalize
		@media screen and (min-width: 1024px)
			padding-right: 10vw
	.bottomplace
		grid-area: bottomplace

</style>