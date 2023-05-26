<script lang="ts">

	import { modalMode, toggleModal, breakZero, breakOne, breakTwo } from '$lib/utils/globalstores';
	import supabase from '$lib/db'

	let fake = false;
	let message = 'Enter your message...';
	let email = '';
	let name = '';
	let blank = false;
	let loading = false;

	let type:string = ''
	let confirm:string = ''

	$: if (!$modalMode) {
		confirm = ''
	}

	async function sentForm(){
		if (type === '' || name === '' || email === '' || message === '') {
			confirm = 'Please add all fields.'
		} else {
		loading = true
		const { error } = await supabase
		.from('forms-betengage')
		.insert({ name: name, email: email, message: message, type: type})
		if ( error ) {
			throw new Error(error.message)
		} else {
			loading = false
			confirm = 'Sent!'
		}
		}

	}

	$: if (message === '') {
		blank = true;
	}

	function fauxfake() {
		fake = !fake;
	}

	function handleTextFocus() {
		message = '';
	}

	function handleTextBlur() {
		message = 'Enter your message...';
	}

	function handleOverlayClick(e: any) {
		if (e.target === e.currentTarget) {
			toggleModal();
		}
	}
</script>

{#if $modalMode}
	<div
		class="rta-modal-overlay"
		class:levelzero={$breakZero}
		class:levelone={$breakOne}
		class:leveltwo={$breakTwo}
		on:click={handleOverlayClick}
		on:keydown={fauxfake}
	>
		<div class="rta-modal fluid">
			<div class="rta-row between ycenter">
				<h6>Contact Bṛhat Education</h6>
				<button class="blank-button" on:click={() => toggleModal()}>
					<svg
						width="24"
						height="24"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12.4501 37.65L10.3501 35.55L21.9001 24L10.3501 12.45L12.4501 10.35L24.0001 21.9L35.5501 10.35L37.6501 12.45L26.1001 24L37.6501 35.55L35.5501 37.65L24.0001 26.1L12.4501 37.65Z"
							stroke="#474747"
							fill="#474747"
						/>
					</svg>
				</button>
			</div>
			<form class="rta-column rowgap-16" class:invalid={blank} on:submit|preventDefault={() => sentForm()}>
				<input type="text" placeholder="Name" bind:value={name} />
				<input type="email" placeholder="Email" bind:value={email} />
				<div class="rta-row ycenter colgap-16">
					<label for="query">Nature of Query:</label>
					<select name="query" id="query" bind:value={type}>
						<option value="null" />
						<option value="designcourse">Design a Course</option>
						<option value="facultydevelopment">Faculty Development</option>
						<option value="curriculumbuilding">Build Curriculum</option>
					</select>
				</div>
				<textarea rows="4" cols="50" on:focus={handleTextFocus}>{message}</textarea>
				<div class="rta-row colgap-16">
					{#if loading}
						<p>Sending...</p>
					{:else}
					{#if !loading}
						<button class="basic-button red" type="submit" on:submit={() => sentForm()}> Submit </button>
						<button class="out-button"> Close </button>
					{/if}
					{/if}
					<small>{confirm}</small>
				</div>
			</form>
		</div>
	</div>
{/if}

<style lang="sass">

.rta-modal-overlay
	display: flex
	width: 100vw
	height: 100vh
	position: fixed
	align-items: center
	justify-content: center
	background: rgba(0,0,0,0.5)
	z-index: 1000
	top: 0
	left: 0
	backdrop-filter: blur(1px)
	overflow: hidden
	.rta-modal
		background: white
		display: flex
		flex-direction: column
		border-radius: 6px
		form
			padding-top: 20px
			input, textarea, select
				border: 1px solid #d7d7d7
				border-radius: 4px
				font-size: 14px
				font-family: 'Plus Jakarta Sans', sans-serif
				color: #878787
				padding: 4px
			.rta-row
				justify-content: flex-start
				label
					font-size: 12px
					font-family: 'Plus Jakarta Sans', sans-serif
					font-weight: bold
					color: #878787
					width: 46%
				select
					width: 50%

.levelzero
	.rta-modal
		padding: 64px
		width: 600px
		height: 60%
		form
			width: 280px

.levelone
	.rta-modal
		padding: 32px
		width: 60%
		height: 60%
		form
			width: 320px

.leveltwo
	.rta-modal
		padding: 32px
		width: 88%
		height: 88%
		form
			width: 100%

.blank-button
	&:hover
		svg path
			fill: #fe4a49
			stroke: #fe4a49


</style>
