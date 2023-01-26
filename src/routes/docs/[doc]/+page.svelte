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
	<div class="base-col list-item">
		<div class="label">structure</div>
		<h5><a href="/docs/shastrikaframework">śhāstrika framework</a></h5>
	</div>
	<div class="base-col list-item">
		<div class="label">vision</div>
		<h5>education as a portal</h5>
	</div>	
	<div class="base-col list-item">
		<div class="label">videos</div>
		<h5>strategic context of IKS</h5>
		<iframe class="videoframe" width="100%" height="100%" src="https://www.youtube.com/embed/VSekDayc5r8" title="Strategic Context of IKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
	</div>
	<div class="base-col list-item">
		<div class="label">actions</div>
		<h5><a href="/docs/learningdesign">Learning Design</a></h5>
	</div>
</div>
</div>
