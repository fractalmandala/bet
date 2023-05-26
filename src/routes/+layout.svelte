<script lang="ts">
import { onMount } from 'svelte'
import { breakZero, breakOne, breakTwo, windowWidth } from '$lib/utils/globalstores'
import Analytics from '$lib/components/globals/Analytics.svelte'
import PageTransitions from '$lib/components/globals/PageTransitions.svelte'
import { fly } from 'svelte/transition'
import '$lib/styles/alltext.sass'
import '$lib/styles/alltokens.sass'
import '$lib/styles/global.sass'
import '$lib/styles/newmod.sass'
import '$lib/styles/containers.sass'
export let data
let showMobile:boolean = false

function toggleMobile(){
	showMobile = !showMobile
}

</script>

<svelte:head>
<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-V6X96E579M"></script>
	<script>
  	window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());
  	gtag('config', 'G-V6X96E579M');
</script>

</svelte:head>

<svelte:window bind:innerWidth={$windowWidth}/>

<div class="appcontainer"
	class:levelzero={$breakZero}
	class:levelone={$breakOne}
	class:leveltwo={$breakTwo}
>
  <div class="appheader">
		<div class="namearea">
			<a href="/">
				<p>B<span class="bluelight">ṛ</span>hat Education</p>
			</a>
		</div>
		<div class="navarea">
			<a href="/bulletin">IKS Bulletin</a>
			<a href="/vision">Our Gaze</a>
			<a href="/about">Our Work</a>
			<a href="/engage">Engage</a>
			<a href="/sponsor">Support Us</a>
			<img class="menuicon" src="/images/hamburger-white.png" alt="icon" on:click={toggleMobile} on:keydown={toggleMobile} />
		</div>
	</div>
  <div class="appfooter">
		<div class="boxc footleft">
			<small style="color: #676767">
				All rights reserved 2023. Bṛhat Education Trust.<br>education@brhat.in | <a href="https://brhat.in" target="_blank" rel="noreferrer" class="bluea">Bṛhat.</a> ©
			</small>
		</div>
			<div class="boxr">
				<a href="https://twitter.com/brhat_in" target="_blank" rel="noreferrer">
						<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/twitter-blue.png" alt="twitter"/>
				</a>
				<a href="https://www.facebook.com/brhat.in" target="_blank" rel="noreferrer">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/facebook-blue.png" alt="facebook"/>
				</a>
				<a href="https://www.linkedin.com/company/brhat/" target="_blank" rel="noreferrer">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/linkedin-blue.png" alt="linkedin"/>
				</a>
				<a href="https://www.youtube.com/@brhat" target="_blank" rel="noreferrer">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/youtube-blue.png" alt="youtube" />
				</a>
				<a href="https://www.brhat.in" target="_blank" rel="noreferrer">
					<img src="https://rnfvzaelmwbbvfbsppir.supabase.co/storage/v1/object/public/brhatwebsite/08icons/brh-blue.png" alt="brhat"/>
				</a>
			</div>
	</div>
	{#key data.pathname}
	<PageTransitions>
  	<div class="appbox">
		{#key data.pathname}
			<PageTransitions>
				<slot></slot>
			</PageTransitions>
		{/key}
		</div>
	</PageTransitions>
	{/key}
</div>
{#if showMobile}
	<div class="boxc fluid mobilemenu" in:fly={{ duration: 350, delay: 30, x: 400, y: 0}} out:fly={{ duration: 300, delay: 0, x: 400, y: 0}} on:click={toggleMobile} on:keydown={toggleMobile}>
		<h3><a href="/bulletin">IKS Bulletin</a></h3>
		<h3><a href="/vision">Our Gaze</a></h3>
		<h3><a href="/about">Our Work</a></h3>
		<h3><a href="/engage">Engage</a></h3>
		<h3><a href="/sponsor">Support</a></h3>
	</div>
{/if}

<style lang="sass">

.mobilemenu
	background: white
	width: 100%
	z-index: 900
	position: fixed
	right: 0
	top: 64px
	height: calc(100vh - 64px)
	padding: 32px
	text-align: right
	h3
		margin: 0
		padding: 4px 0
		border-bottom: 1px solid #d7d7d7

.appcontainer 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: 64px 1fr 128px 
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "appheader" "appbox" "appfooter" 
	position: relative
	width: 100vw
	overflow-x: hidden
.appheader 
	grid-area: appheader 
	height: 64px 
	margin-bottom: -64px
	display: flex
	flex-direction: row
	background: linear-gradient(90deg, rgba(6,9,7,0.85) 0%, rgba(19,19,19,0.9) 100%)
	position: sticky
	top: 0
	justify-content: space-between
	padding-left: 32px
	padding-right: 32px
	z-index: 999
	.namearea
		align-items: center
		display: flex
		flex-direction: row
	.namearea p
		font-weight: 600
		font-size: 20px
		margin: 0
		color: white
		letter-spacing: 0px
	.navarea
		align-items: center
		display: flex
		flex-direction: row
		column-gap: 16px
		a
			color: white
			text-transform: uppercase
			font-weight: 600
			font-size: 12px
			&:hover
				color: #5B92BD
				transform: scale(0.9)
		img
			object-fit: contain
			height: 32px
			width: 32px
	@media screen and (max-width: 899px)
		.navarea
			justify-content: flex-end
			align-items: center
			>a
				display: none
			img
				height: 28px
				width: 28px
				margin-top: 12px
.appfooter 
	grid-area: appfooter 
	height: 128px 
	display: flex
	flex-direction: row
	background: #171717
	align-items: center
	justify-content: space-between
	padding: 0 2vw
	.boxr
		align-items: center
		gap: 16px
		padding-bottom: 0
		margin-top: 12px
		img
			object-fit: contain
			width: 24px
			height: 24px
			filter: saturate(0.01)
			&:hover
				filter: saturate(1)
.appbox 
	grid-area: appbox 
	box-sizing: border-box
	padding: 0

.navarea
	@media screen and (min-width: 900px)
		img
			display: none

.appfooter
	@media screen and (max-width: 899px)
		padding-left: 16px
		padding-right: 16px


</style>