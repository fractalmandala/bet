<script lang="ts">
	export let data:any
</script>

<div class="sectionwithtitlebody fluid x0">
		<div class="section-title">
			<small>SECTION {data.sequence}</small>
			<h2 class="uppercase">{data.name}</h2>
		</div>
		<div class="section-body content">
			<h6 class="w400">{data.content}</h6>
			<h5>Instructor:</h5>
			<p class="uppercase">{data.person}</p>
			{#if data.profile && data.profile.length > 0}
				<div class="smallest">
					<pre class="grey">{data.profile}</pre>
				</div>
			{/if}
		</div>
</div>

<style lang="sass">

.sectionwithtitlebody
	display: grid
	grid-auto-flow: row
	grid-template-columns: 1fr
	grid-template-rows: auto auto
	grid-template-areas: "section-title" "section-body"
	gap: var(--long-d) 0
	padding-bottom: var(--long-f)
	.section-title
		grid-area: section-title
		text-align: right
		border-bottom: 1px solid #e1e1e1
		border-right: 8px solid var(--bluea)
		padding-right: var(--wide-d)
	.section-body
		grid-area: section-body
		h6
			padding-bottom: var(--long-c)
		h5
			border-top: 1px solid #e1e1e1
			padding-top: var(--long-d)
		p
			font-weight: 600

.x0
	align-content: start
	small
		font-weight: bold
		color: #878787
	@media screen and (min-width: 1024px)
		h5
			padding-top: var(--long-a)

</style>