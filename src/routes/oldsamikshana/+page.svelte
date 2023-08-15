<script lang="ts">
	import { onMount } from 'svelte'
	import { samikshanaIntro, samikshanaQuotes1, samikshanaQuotes2 } from '$lib/utils/supapulls'

	let intros:any
	let quotes1:any
	let quotes2:any

	onMount(async() => {
		intros = await samikshanaIntro()
		quotes1 = await samikshanaQuotes1()
		quotes2 = await samikshanaQuotes2()
	})

</script>

<div class="page-container fluid">
	<div class="titleplace">
		<h1>Samīkṣaṇā</h1>
	</div>
	<div class="quotesplace blockquote">
		{#if quotes1 && quotes1.length > 0}
			{#each quotes1 as quote}
				<pre>{quote.content}</pre>
				<small>{quote.person}</small>
			{/each}
		{/if}
	</div>
	<div class="bodyplace content">
		{#if quotes2 && quotes2.length > 0}
			{#each quotes2 as quote}
				<h6 class="w400">{quote.content}</h6>
			{/each}
		{/if}
		<div class="introsplace">
			{#if intros && intros.length > 0}
				{#each intros as intro}
					<div class="introcontainer content">
						<h4>{intro.name}</h4>
						<pre>{intro.content}</pre>
					</div>
				{/each}
			{/if}
		</div>
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
	.quotesplace
		grid-area: quotesplace
		width: 70%
		pre
			font-style: italic
			font-weight: 400 !important
			margin: 0
		small
			color: #878787
		@media screen and (max-width: 1023px)
			width: 100%
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
			row-gap: var(--long-f)
			h4
				text-transform: capitalize
				padding-bottom: var(--long-b)
			pre
				line-height: 1.5
			@media screen and (max-width: 899px)
				row-gap: var(--long-f)
				pre
					margin-bottom: 0
			@media screen and (min-width: 900px)
				row-gap: var(--long-d)
		@media screen and (min-width: 1024px)
			padding-right: 10vw
	.bottomplace
		grid-area: bottomplace

</style>