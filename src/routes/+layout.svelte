<script lang="ts">
import '$lib/styles/global.css'
import LocomotiveContainer from '$lib/components/globals/LocomotiveContainer.svelte'
import '$lib/styles/locomotive-scroll.css'
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/Footer.svelte'
</script>


<Header></Header>
<LocomotiveContainer>
<slot></slot>
<Footer></Footer>
</LocomotiveContainer>


