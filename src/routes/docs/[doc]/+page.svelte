<script>
  /**
	 * @type {{ title: any; content: any; }}
	 */
   export let data;
</script>

<div class="primecontainer-row">
<div class="blog">
<h2>{ data.title }</h2>
<svelte:component this={data.content} />
</div>
<div class="side-blog">

</div>
</div>

<style>
	p {
		color: #878787;
		font-size: 1.2em;
	}
</style>
