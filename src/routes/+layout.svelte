<script lang="ts">
import { onMount } from 'svelte'
import Animations from "textify.js";
import AOS from 'aos';
import '$lib/styles/global.css'
import '$lib/styles/textify.css'
import 'aos/dist/aos.css';
import '$lib/styles/typography.css'
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/Footer.svelte'

onMount(() => {
	AOS.init();
  AOS.refresh();
	const { Textify } = Animations;
	new Textify({
		duration: 600,
		stagger: 50,
		ease: 'circIn',
		threshold: 0.2
	})
}) 
</script>


<Header></Header>
<slot></slot>
<Footer></Footer>



