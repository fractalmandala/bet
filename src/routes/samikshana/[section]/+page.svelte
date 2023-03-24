<script lang="ts">
	export let data:any
</script>

<div class="simplecontainer padstd x0">
	{#if data && data.length > 0}
		<h5>{data.name}</h5>
		<p>{data.content}</p>
	{/if}
</div>