<script>
import Sidebar from '$lib/components/globals/Sidebar.svelte'
</script>

<div class="doc-container">
<Sidebar></Sidebar>
	<div class="c-c-c-c other isbot">
		<slot></slot>
	</div>
</div>

<style>

@media screen and (min-width: 768px) {
	.doc-container {
		display: flex;
		flex-direction: row;

		height: 100%;
	}
	.other {
		display: flex;
		flex-direction: column;
		width: 76vw;
		padding-bottom: 8em;
		padding-left: 120px;
		padding-right: 4vw;
		padding-top: 120px;
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
	padding-top: 80px;
	}
}
</style>