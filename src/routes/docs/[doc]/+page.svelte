<script>
  /**
	 * @type {{ title: any; content: any; }}
	 */
   export let data;
</script>


<div class="topbox">
	<div class="typ">
		<h2 class="titleis">{ data.title }</h2>
	</div>
	<div class="boxc blogger">
		<svelte:component this={data.content} />
	</div>
</div>


<style lang="sass">

.topbox
	padding-top: 128px
	@media screen and (min-width: 1024px)
		padding-left: 8vw
		padding-right: 8vw
	@media screen and (max-width: 899px)
		padding-left: 0vw
		padding-right: 0vw
		padding-top: 40px


</style>