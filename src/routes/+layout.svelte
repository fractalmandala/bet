<script>
import '$lib/styles/global.css'
import '$lib/styles/locomotive-scroll.css'
import { onMount } from 'svelte'
import Locomotor from '$lib/components/globals/Locomotor.svelte'
import Header from '$lib/components/globals/Header.svelte'
import Footer from '$lib/components/globals/Footer.svelte'



</script>

<Locomotor>
<Header></Header>
<slot></slot>
</Locomotor>
