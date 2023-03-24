<script lang="ts">
	import { onMount } from 'svelte'
	import { samikshanaSections } from '$lib/utils/supapulls'

	let mobileNav:boolean = false

	function toggleMobileNav(){
		mobileNav = !mobileNav
	}

	let sections:any

	onMount(async() => {
		sections = await samikshanaSections()
	})
</script>

<div class="container-sidebar-body x0">
	<div class="container-sidebar" class:Opened={mobileNav}>
			<h5 class="bluea"><a href="/samikshana">Samīkṣaṇā</a></h5>
			<h5 class="just"><a href="/samikshana/program">Program Details</a></h5>
			<h5 class="just"><a href="/samikshana/faculty">Schedule</a></h5>
		{#if sections && sections.length > 0}
			<h5>Sections:</h5>
			{#each sections as section}
				<p><a href="/samikshana/section/{section.id}">{section.name}</a></p>
			{/each}
		{/if}
		<div class="iconcontainer" on:click={toggleMobileNav} on:keydown={toggleMobileNav}>
			<svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.25 8C17.0449 8 18.5 6.54493 18.5 4.75C18.5 2.95507 17.0449 1.5 15.25 1.5C13.4551 1.5 12 2.95507 12 4.75C12 6.54493 13.4551 8 15.25 8Z" fill="white"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 2.25C13.8693 2.25 12.75 3.36929 12.75 4.75C12.75 6.13071 13.8693 7.25 15.25 7.25C16.6307 7.25 17.75 6.13071 17.75 4.75C17.75 3.36929 16.6307 2.25 15.25 2.25ZM11.25 4.75C11.25 2.54086 13.0409 0.75 15.25 0.75C17.4591 0.75 19.25 2.54086 19.25 4.75C19.25 6.95914 17.4591 8.75 15.25 8.75C13.0409 8.75 11.25 6.95914 11.25 4.75Z" fill="white"/>
				<path d="M15.25 18.5C17.0449 18.5 18.5 17.0449 18.5 15.25C18.5 13.4551 17.0449 12 15.25 12C13.4551 12 12 13.4551 12 15.25C12 17.0449 13.4551 18.5 15.25 18.5Z" fill="white"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 12.75C13.8693 12.75 12.75 13.8693 12.75 15.25C12.75 16.6307 13.8693 17.75 15.25 17.75C16.6307 17.75 17.75 16.6307 17.75 15.25C17.75 13.8693 16.6307 12.75 15.25 12.75ZM11.25 15.25C11.25 13.0409 13.0409 11.25 15.25 11.25C17.4591 11.25 19.25 13.0409 19.25 15.25C19.25 17.4591 17.4591 19.25 15.25 19.25C13.0409 19.25 11.25 17.4591 11.25 15.25Z" fill="white"/>
				<path d="M4.75 8C6.54493 8 8 6.54493 8 4.75C8 2.95507 6.54493 1.5 4.75 1.5C2.95507 1.5 1.5 2.95507 1.5 4.75C1.5 6.54493 2.95507 8 4.75 8Z" fill="white"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2.25C3.36929 2.25 2.25 3.36929 2.25 4.75C2.25 6.13071 3.36929 7.25 4.75 7.25C6.13071 7.25 7.25 6.13071 7.25 4.75C7.25 3.36929 6.13071 2.25 4.75 2.25ZM0.75 4.75C0.75 2.54086 2.54086 0.75 4.75 0.75C6.95914 0.75 8.75 2.54086 8.75 4.75C8.75 6.95914 6.95914 8.75 4.75 8.75C2.54086 8.75 0.75 6.95914 0.75 4.75Z" fill="white"/>
				<path d="M4.75 18.5C6.54493 18.5 8 17.0449 8 15.25C8 13.4551 6.54493 12 4.75 12C2.95507 12 1.5 13.4551 1.5 15.25C1.5 17.0449 2.95507 18.5 4.75 18.5Z" fill="white"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 12.75C3.36929 12.75 2.25 13.8693 2.25 15.25C2.25 16.6307 3.36929 17.75 4.75 17.75C6.13071 17.75 7.25 16.6307 7.25 15.25C7.25 13.8693 6.13071 12.75 4.75 12.75ZM0.75 15.25C0.75 13.0409 2.54086 11.25 4.75 11.25C6.95914 11.25 8.75 13.0409 8.75 15.25C8.75 17.4591 6.95914 19.25 4.75 19.25C2.54086 19.25 0.75 17.4591 0.75 15.25Z" fill="white"/>
			</svg>
		</div>
	</div>
	<div class="container-body">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.container-sidebar-body
	min-height: 100vh
	display: grid
	grid-auto-flow: row
	grid-template-columns: 344px 1fr
	grid-template-rows: auto
	grid-template-areas: "container-sidebar container-body"
	gap: 0 64px
	.container-sidebar
		padding-top: 64px
		grid-area: container-sidebar
		display: flex
		flex-direction: column
		width: 344px
		padding-bottom: 64px
		border-right: 1px solid #f1f1f1
		background: #fcfcfc
		height: 100vh
		p
			margin: 0
			font-size: 12px
			color: #878787
			padding-bottom: 6px
			&:hover
				color: var(--bluea)
		h5
			font-size: 14px
			margin: 0
			padding-bottom: 12px
		.just
			&:hover
				color: var(--bluea)
		@media screen and (min-width: 1024px)
			padding-left: 32px
			padding-right: 32px
			position: sticky
			top: 64px
	.container-body
		padding-top: 56px
		grid-area: container-body
		display: grid
		grid-auto-flow: row
		@media screen and (min-width: 1024px)
			padding-right: var(--wide-f)
		@media screen and (max-width: 1023px)
			padding-right: var(--wide-f)
			padding-left: var(--wide-f)

.container-sidebar-body
	@media screen and (max-width: 1023px) and (min-width: 900px)
		grid-template-columns: 300px 1fr
		gap: 0 32px
		.container-sidebar
			width: 300px
			padding-left: var(--wide-c)
			padding-right: var(--wide-c)
		.container-body
			padding-right: var(--wide-c)
			padding-left: var(--wide-b)

.iconcontainer
	@media screen and (min-width: 900px)
		display: none
	@media screen and (max-width: 899px)
		display: flex
		height: 40px
		cursor: pointer

.container-sidebar-body
	@media screen and (max-width: 899px)
		grid-template-columns: 1fr
		grid-template-rows: 1fr 40px
		grid-template-areas: "container-body" "container-sidebar"
		gap: 0 0
		.container-sidebar
			grid-area: container-sidebar
			width: 100%
			height: 40px
			padding-top: 0
			padding-bottom: 0
			position: fixed
			justify-content: flex-end
			bottom: 0
			left: 0
			overflow-y: hidden
			background: linear-gradient(90deg, #1A659E 0%, #10AEB8 100%)
			transition: all 0.11s var(--cubec)
			h5, p
				visibility: hidden
			.iconcontainer
				display: flex
				flex-direction: column
				height: 40px
				width: 100%
				align-items: center
				justify-content: center
				margin-bottom: 8px
		.container-body
			grid-area: container-body
			width: 100%
		.container-sidebar.Opened
			height: 100%
			background: white
			z-index: 700
			transition: all 0.11s var(--cubea)
			padding: 80px 32px 0 32px
			justify-content: space-between
			h5, p
				visibility: visible
			h5
				font-size: 16px
			.iconcontainer
				svg
					path
						fill: var(--bluea)

</style>