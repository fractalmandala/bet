<script>
import '$lib/styles/global.css'
import { onMount } from 'svelte'
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/Footer.svelte'
import AOS from 'aos'
import 'aos/dist/aos.css'; // You can also use <link> for styles

 onMount(() => {
		AOS.init();
    AOS.refresh();
  }) 
</script>

<Header></Header>
<slot></slot>
<Footer></Footer>