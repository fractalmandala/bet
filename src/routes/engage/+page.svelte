<script lang="ts">

	import { modalMode, toggleModal } from '$lib/utils/globalstores' 
	import ModalForm from '$lib/modals/ModalForm.svelte'


</script>



<ModalForm/>
<div class="simplecontainer padstd box1 fluid topbox">
	<h2 class="bluea serif">
			The objective of Bṛhat’s work in the IKS space is to re-conceptualize subjects/disciplines in the śāstrika framework. The idea is to locate every subject from its conceptualization to its application within these frameworks.
	</h2>
	<h5 class="wide75 grey w400">
			Bṛhat strives to revive, develop, and popularise indigenous inductive and deductive approaches to knowing, which are anchored in the self-reflexive, self-conscious sociology and anthropology of the Vedas.
	</h5>
				<button class="basic-button lg" on:click={() => toggleModal()}>
						Contact
				</button>
	<div class="boxof3grid fluid">
		<div class="grid3one rta-column rowgap-16 fit p-bot-16-m">
			<h5>Learning Design</h5>
				<p class="grey">
					Bṛhat is a nodal agency helping institutions digitize their curriculum and pedagogies, and introducing learning designs that are compatible with IKS thinking.
				</p>
				<p class="grey">
					Institutions looks to design curriculum around IKS disciplines, or implementing learning design compatible with IKS-thinking, can reach out to us.
				</p>
		</div>
		<div class="grid3two rta-column rowgap-16 fit p-bot-16-m">
			<h5>Competency Development</h5>
			<p class="grey">We have active experience in conducting faculty development programs for higher educational institutions to initiate IKS pedagogies. We recognize that any task of IKS integration and implementation will insufficient if human resources in the respective areas are not created.</p>
			<p class="grey">Explore our calendar of events to see the work we are doing in competency development and faculty training in partnerships with various institutions.</p>

		</div>
		<div class="grid3three rta-column rowgap-16 fit p-bot-16-m">
			<h5>Curriculum Building</h5>
			<p class="grey">The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics. This is equally true for pedagogies that are to be followed for IKS-based curriculum.</p>
			<p class="grey">We draw from deep research and diverse expertize to aid institutions build modern learning frameworks for IKS disciplines, rooting them in their own epistemes while engaging with the contemporary.</p>

		</div>
	</div>
</div>


<style lang="sass">

.box1
	min-height: 100vh
	align-content: center
	row-gap: 32px
	padding-top: 80px

.boxof3grid
	padding-bottom: 64px
	margin-top: 8px
	h5
		border-top: 1px solid #d7d7d7
		padding-top: 24px

</style>