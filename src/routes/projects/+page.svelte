<script lang="ts">
 import { onMount } from 'svelte'
 import { betProjects } from '$lib/utils/supapulls'

 let projects:any

 onMount(async() => {
  projects = await betProjects();
 })
</script>

<div class="rta-column minH min is-padded rowgap-64 fluid lineit">
 <div class="rta-in-col ta-c col-cent light rowgap-16">
		<h2 class="titleis">Projects</h2>
 </div>
 <div class="forgrid">
{#if projects && projects.length > 0}
 {#each projects as item}
  {#if item.image && item.image.length > 0}
  <div class="withimage">
   <img src={item.image} alt={item.project}/>
   {#if item.link && item.link.length > 0}
    <h5><a href={item.link} target="_blank" rel="noreferrer">{item.project}</a></h5>
   {:else}
   <h5>{item.project}</h5> 
   {/if}
   {#if item.overview && item.overview.length > 0}
   <pre>{item.overview}</pre>
   {/if}
   {#if item.partner && item.partner.length > 0}
   <small>Partner: {item.partner}</small>
   {/if}
   {#if item.brhatrole && item.brhatrole.length > 0}
   <cite>Bṛhat Role: <span style="color: #1a659e">{item.brhatrole}</span></cite>
   {/if}
  </div>
  {:else}
  <div class="noimage">
   {#if item.link && item.link.length > 0}
    <h5><a href={item.link} target="_blank" rel="noreferrer">{item.project}</a></h5>
   {:else}
   <h5>{item.project}</h5> 
   {/if}
   {#if item.overview && item.overview.length > 0}
   <pre>{item.overview}</pre>
   {/if}
   {#if item.partner && item.partner.length > 0}
   <small>Partner: {item.partner}</small>
   {/if}
   {#if item.brhatrole && item.brhatrole.length > 0}
   <cite>Bṛhat Role: <span style="color: #1a659e">{item.brhatrole}</span></cite>
   {/if}   
  </div>
  {/if}
 {/each}
{/if}
</div>
</div>

<style lang="sass">

img
  object-fit: contain
  width: 100%   

h5
 a 
  text-decoration: underline
  color: #1a659e 

.forgrid
 display: grid
 grid-auto-flow: row
 @media screen and (min-width: 769px)
  grid-template-columns: 1fr 1fr
  grid-template-areas: ". ."
  gap: 48px
 @media screen and (max-width: 768px)
  grid-template-columns: 1fr
  grid-template-areas: "."
  gap: 16px 

.withimage, .noimage
 display: flex
 flex-direction: column
 row-gap: 8px
 small, cite
  text-transform: capitalize
  font-style: normal
  font-size: 14px
  border-bottom: 1px solid #e7e7e7
  padding-bottom: 8px
  width: max-content
  max-width: 100%
 small
  font-weight: bold
 h5
  margin-bottom: 0 
 @media screen and (max-width: 768px)
  width: 88% 

</style>