<script>
import Sidebar from '$lib/components/globals/Sidebar.svelte'
</script>

<div class="doc-container">
	<div class="c-c-c-c other istop isbot">
		<slot></slot>
	</div>
<Sidebar></Sidebar>
</div>

<style>

@media screen and (min-width: 768px) {
	.doc-container {
		display: flex;
		flex-direction: row;
	}
	.other {
		display: flex;
		flex-direction: column;
		width: 76vw;
		padding-bottom: 8em;
		padding-left: 4vw;
		padding-right: 4vw;
	}

}

@media screen and (max-width: 767px) {
	.other {
		width: 100%;
		padding-left: 4vw;
		padding-right: 4vw;
	}
	.doc-container {
	display: flex;
	flex-direction: column;
	height: 100%;
	}
}
</style>