<script lang="ts">
import { onMount } from 'svelte';
import LocomotiveScroll from 'locomotive-scroll';
let scroll
onMount(() => {
  const container = document.querySelector('[data-scroll-container]');
  if (container) {
  scroll = new LocomotiveScroll({
    el: container as HTMLElement,
    smooth: true,
		reloadOnContextChange: true,
		repeat: true
  });
  }
});
</script>

<div class="locoscroller" data-scroll-container>
<slot></slot>
</div>

<style>
.locoscroller {
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
</style>