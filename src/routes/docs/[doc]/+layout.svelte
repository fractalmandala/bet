<script>
import Sidebar from '$lib/components/globals/Sidebar.svelte'
</script>

<div class="containerwithsidebar">
	<div class="containersidebar">
		<Sidebar></Sidebar>
	</div>
	<div class="containermain">
		<slot></slot>
	</div>
</div>

<style lang="sass">

.containerwithsidebar
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr 320px
	grid-template-rows: auto
	grid-template-areas: "containermain containersidebar"
	gap: 0px 48px
	padding-left: 48px
	padding-right: 48px
	.containersidebar
		grid-area: containersidebar
		width: 320px
	.containermain
		grid-area: containermain
	@media screen and (max-width: 899px)
		grid-template-columns: 1fr
		grid-template-rows: auto auto
		grid-template-areas: "containermain" "containersidebar"
		padding-left: 6vw
		padding-right: 6vw
		gap: 0 0
		.containersidebar
			width: 100%


</style>