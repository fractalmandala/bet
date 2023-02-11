<script>
  /**
	 * @type {{ title: any; content: any; }}
	 */
   export let data;
</script>



<h2>{ data.title }</h2>
<div class="c-c-c-c">
<svelte:component this={data.content} />
</div>



<style>


	@media screen and (min-width: 768px) {

		h2 {
			margin-top: 4em;
			margin-left: 6vw;
			margin-bottom: 0;
			color: var(--red);
		}
		.c-c-c-c {
			padding-right: 16vw;
			padding-left: 6vw;
			padding-top: 2em;
		}
	}

</style>
