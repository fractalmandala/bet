<script lang="ts">
	import { onMount } from 'svelte'
	import { samikshanaDetails } from '$lib/utils/supapulls'

	let details:any

	onMount(async() => {
		details = await samikshanaDetails()
	})

</script>

<div class="page-container fluid">
	<div class="titleplace content">
		<h2>Program Details</h2>
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
	grid-template-areas: "titleplace" "quotesplacegrid" "bottomplace"
	gap: var(--long-d) 0
	align-content: start
	.titleplace
		grid-area: titleplace
		h2
			border-left: 8px solid var(--bluea)
			padding-left: 16px
	.quotesplacegrid
		grid-area: quotesplacegrid
		display: grid
		grid-auto-flow: row
		grid-template-columns: 1fr 1fr
		grid-template-rows: auto
		grid-template-areas: "." "."
		gap: var(--long-d) var(--wide-f)
		h5
			margin: 0
			text-transform: capitalize
		pre
			color: #878787
		@media screen and (max-width: 899px)
			grid-template-columns: 1fr
			grid-template-rows: auto
			grid-template-areas: "." "."
	.bottomplace
		grid-area: bottomplace

</style>