<div class="standardcard">
	<div class="image">
		<slot name="image"></slot>
	</div>
	<div class="body">
		<div class="text">
			<slot name="text"></slot>
		</div>
		<div class="button" style="margin-top: 16px">
			<slot name="button"></slot>
		</div>
	</div>
</div>

<style lang="sass">

.standardcard
	display: flex
	flex-direction: row
	gap: 24px
	.image
		width: 35%
	.body
		width: calc(75% - 24px)
		display: flex
		flex-direction: column
		align-items: flex-start

</style>