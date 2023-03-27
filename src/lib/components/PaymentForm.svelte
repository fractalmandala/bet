<script lang="ts">
  import supabase from '$lib/db'
	import { fly, scale } from 'svelte/transition'
	import { quintIn, quintOut } from 'svelte/easing'
  let fullname = '';
  let phone = '';
  let emailid = '';
  let showQRCode = false;
	let showForm = true

  async function handleSubmit() {
    const { error } = await supabase
      .from('form-payment-nitividhana')
      .insert([{ fullname, phone, emailid }]);

    if (error) {
      console.error('Sorry, your details were not submitted. Please try again. If problem persists, kindly write to amrit.pandey@brhat.in.', error);
    } else {
			showForm = false;
      showQRCode = true;
			fullname = ''
			phone = ''
			emailid = ''
    }
  }

	export let showModal:boolean
	let dialog:HTMLDialogElement
	$: if (dialog && showModal) dialog.showModal()
</script>

<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	on:keydown|self={() => dialog.close()}
	>
<div on:click|stopPropagation on:keydown|stopPropagation class="searchbackdrop" in:fly={{ duration: 500, x: 0, y: 300, easing: quintOut }} out:scale={{ duration: 400, easing: quintIn}}>
		{#if showForm}
			<h6>Namaste, thank you for your interest in Nītividhāna.</h6>
			<p>Please fill the below details to access the payment information.<br>We request that you enter the same name, email and phone number<br>that are linked to the payment source you will pay from. </p>
			<form class="boxc" on:submit|preventDefault={handleSubmit}>
  			<label for="name">Name:</label>
  			<input type="text" id="name" bind:value={fullname} placeholder="Full Name" required />
  			<label for="phone_number">Phone Number:</label>
  			<input
					type="tel"
					id="phone_number"
					bind:value={phone}
					placeholder="Phone Number"
					required />	
  			<label for="email">Email ID:</label>
  			<input type="email" id="email" bind:value={emailid} placeholder="Email ID" required />
  			<button class="btn1 btn01" type="submit">Submit</button>
			</form>
		{/if}
		{#if showQRCode}
		<div transition:fly>
 		<h5>Thank you, your details were successfully submitted.<br>This is the bank account information for Nītividhāna fees payment:</h5>
		<p>
			Bank: ICICI<br>
			Account Number: 004005027806<br>
			Name : Brhat Educational Trust<br>
			IFSC: ICIC0000040<br>
			Account Type: Current<br>
		</p>
		<h5>Alternately, you can pay us at our UPI ID: brhat@icici</h5>
		<h5>
			Please pay a total no more than ₹10,030 (₹8500 + GST) to the above account.<br> You will receive a welcome and confirmation mail within 24 hours of successful payment. 
		</h5>
		</div>
		{/if}
	<button class="btn1-g btn01-g greybutton" on:click={() => dialog.close()} on:keydown={() => dialog.close()}>CLOSE</button>
</div>
</dialog>


<style lang="sass">

.qrimage
	img
		object-fit: cover
		width: 400px
		height: 300px

.greybutton
	margin-top: 24px

.searchbackdrop
	padding: 48px
	@media screen and (max-width: 899px)
		padding: 32px

.boxc
	label
		font-size: 12px
		text-transform: uppercase
		font-weight: bold
		color: #272727
	input
		padding: 8px
		border: 1px solid #e1e1e1
		margin-bottom: 24px
		margin-top: 6px

</style>
