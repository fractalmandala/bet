<script>
  /**
	 * @type {{ title: any; content: any; }}
	 */
   export let data;
</script>


<div class="spline">
<h2 class="theblue">{ data.title }</h2></div>
<div class="c-c-c-c blogger">
<svelte:component this={data.content} />
</div>



<style>


	@media screen and (min-width: 768px) {

		h2 {
			margin-bottom: 32px;
			margin-top: 0;
		}
		.c-c-c-c {
			padding-right: 12vw;
		}
	}

@media screen and (max-width: 767px) {
	h2 { margin-bottom: 32px;}
}

</style>
