<script lang="ts">
import { onMount } from 'svelte'
import AOS from 'aos';
import '$lib/styles/global.css'
import 'aos/dist/aos.css';
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/Footer.svelte'
onMount(() => {
	AOS.init();
  AOS.refresh();
}) 
</script>


<Header></Header>
<slot></slot>
<Footer></Footer>



