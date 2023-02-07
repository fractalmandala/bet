<script lang="ts">
import { onMount } from 'svelte';
import LocomotiveScroll from 'locomotive-scroll';
let scroll

onMount(() => {
  const el = document.querySelector('[data-scroll-container]') as HTMLElement;
  if (el) {
    const scroll = new LocomotiveScroll({
      el,
      smooth: true,
      reloadOnContextChange: true,
      repeat: true
    });
  } else {
    console.error('Element with data-scroll-container not found');
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