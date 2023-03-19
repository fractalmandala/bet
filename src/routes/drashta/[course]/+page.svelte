<script lang="ts">
import { onMount } from 'svelte'
import { fly } from 'svelte/transition'
import { courseContents, courseDetails, courseTakeaways, courseInstructor } from '$lib/utils/supapulls'
import { page } from '$app/stores'
let dynamizer = ''
let coursecontents:any
let coursedetails:any
let coursetakeaways:any
let courseinstructor:any
let selectedLabel:boolean[] = [false, false, false, false, false]

function toggleLabel(index:number) {
	selectedLabel[index] = selectedLabel[index]
	for ( let i = 0; i < selectedLabel.length; i++ ) {
		if ( i !== index && selectedLabel[i] == true ) {
			selectedLabel[i] = false
		}
	}
}

export let data:any
let x:any


onMount(async() => {
	x = $page.url.pathname.substr(9,40)
	coursedetails = await courseDetails(dynamizer)
	coursecontents = await courseContents(dynamizer)
	coursetakeaways = await courseTakeaways(dynamizer)
	courseinstructor = await courseInstructor(dynamizer)
})
</script>

<div class="coursebox">
  <div class="coursetitle padstd">
		<div class="titlesection flex">
			<h1 class="capitalize">{data.name}</h1>
			<div class="boxr uppercase">
				<p>{data.datefrom}</p>
				<p>{data.status}</p>
			</div>
		</div>
		<div class="imagesection">
			<img src={data.image} alt={data.name} />
		</div>
	</div>
  <div class="coursebody">
  </div>
</div>

<style lang="sass">

.expandup
	svg
		height: 20px
		width: 20px
		object-fit: contain

.instruct
	gap: 40px
	margin-bottom: 32px
	border-bottom: 1px solid #f1f1f1

.instruct img
	object-fit: cover
	width: 160px
	height: 160px

.takes
	gap: 40px
	border-bottom: 1px solid #f1f1f1
	padding-bottom: 8px
	flex-wrap: wrap
	.boxc
		width: calc(50% - 24px)
		height: max-content

.contentscontainer
	display: flex
	flex-direction: row
	flex-wrap: wrap
	gap: 40px
	.boxc
		width: calc(50% - 24px)
		border-bottom: 1px solid #f1f1f1
		padding-bottom: 8px
	p
		font-weight: bold
		margin: 0 0 12px 0
	small
		font-size: 12px
		color: #878787
	.corcontent
		font-weight: 400 !important
		font-size: 1rem !important

.instruct p
	font-size: 14px
	color: #878787

.simple
	p
		font-weight: bold
		margin: 0 0 12px 0
	small
		font-size: 12px
		color: #878787

.icons .boxc
	width: 33%
	img
		object-fit: cover
		height: 104px
		width: 104px
		margin: auto

.corcontent
	font-weight: 400

.icons 
	border-top: 1px solid #f1f1f1
	border-bottom: 1px solid #f1f1f1
	padding-bottom: 32px
	margin-bottom: 32px
	padding-top: 24px
	width: 100%
	justify-content: center
	small
		text-transform: uppercase
		font-size: 16px
		letter-spacing: 1px
		font-weight: bold
		text-align: center

.coursebox 
	display: grid 
	grid-template-columns: 1fr 
	grid-template-rows: auto auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "coursetitle" "coursebody" 

.coursetitle 
	grid-area: coursetitle
	grid-auto-flow: row
	display: grid
	grid-template-columns: 1fr 0.8fr
	grid-template-rows: auto
	align-items: center
	grid-template-areas: "titlesection imagesection"
	gap: 0px 32px
	height: 100vh
	.titlesection
		grid-area: titlesection
		h1
			font-size: 4.8rem
			line-height: 1.1 
			border-bottom: 1px solid #d7d7d7
			padding-bottom: 16px
	.imagesection
		grid-area: imagesection
		display: flex
		flex-direction: row
		align-items: center
		img
			object-fit: cover
			width: 100%
			height: 100%
		
.coursebody 
	display: grid 
	grid-template-columns: 320px 1fr 
	grid-template-rows: auto 
	gap: 0px 32px 
	grid-auto-flow: row 
	grid-template-areas: "coursenav coursesection" 
	grid-area: coursebody
	padding-bottom: 64px
.coursenav 
	grid-area: coursenav 
	width: 320px
	height: max-content
	h5
		font-size: 1.44rem
		text-transform: uppercase
		font-weight: 500
		color: #474747
		margin: 0
		padding: 8px
		border-bottom: 1px solid #f1f1f1
		cursor: pointer
		&:hover
			background: #474747
			color: white
	h5.panel1
		background: linear-gradient(to right, #4CA1AF, #2C3E50)
		color: white
	h5.panel2
		background: linear-gradient(to right, #4CA1AF, #2C3E50)
		color: white
	h5.panel3
		background: linear-gradient(to right, #4CA1AF, #2C3E50)
		color: white
	h5.panel4
		background: linear-gradient(to right, #4CA1AF, #2C3E50)
		color: white
	h5.panel5
		background: linear-gradient(to right, #4CA1AF, #2C3E50)
		color: white
.coursesection 
	grid-area: coursesection
	display: grid 
	grid-template-columns: 1fr
	grid-template-rows: auto
	gap: 0px 0px 
	grid-auto-flow: row 
	grid-template-areas: "partbox"
	align-items: start
	align-content: start
	min-height: 100vh
	h5
		margin: 0
.partbox
	grid-area: partbox

.coursenav p
	margin: 0
	padding: 8px
	font-size: 1rem
	font-weight: 500
	color: #878787
	position: relative
	&:hover
		color: #2C3E50
		&::after
			position: absolute
			bottom: 0
			left: 0
			height: 1px
			width: 0
			border-bottom: 1px solid #474747
			content: ''
			animation: growbot 0.2s ease forwards

@keyframes growbot
	0%
		width: 0
	100%
		width: 100%

@media screen and (min-width: 1024px)
	.coursebody
		padding-left: 128px
		padding-right: 128px
	
@media screen and (max-width: 767px)
	.coursebox 
		box-sizing: border-box
		display: flex
		flex-direction: column
	.coursetitle 
		display: flex
		flex-direction: column
		justify-content: center
		height: 100%
		.titlesection
			padding: 90px 0 0 0 
			h1
				font-size: 2rem
				letter-spacing: 0px
				line-height: 1.1 
		.imagesection
			display: flex
			flex-direction: column
			gap: 0
			background: linear-gradient(to right, #4CA1AF, #2C3E50)
			padding: 8px
			border-radius: 4px
			box-shadow: 4px 5px 11px #c1c1c1
			.pureimage
				width: 100%
			.overview
				width: 100%
				p
					font-size: 14px
					line-height: 1.6
					color: white
				h5
					margin: 0
					text-transform: uppercase
					color: white
					font-size: 1.2rem
	.coursebody 
		display: grid 
		grid-template-columns: 1fr 
		grid-template-rows: auto auto 
		gap: 0px 0px
		grid-auto-flow: row 
		grid-template-areas: "coursesection" "coursenav"
		grid-area: coursebody
		padding-left: 0
		padding-right: 0
		.coursenav
			display: flex
			flex-direction: column
			justify-content: flex-end
			height: 40px
			width: 100vw
			position: fixed
			bottom: 0
			background: rgba(0,0,0,0.7)
			backdrop-filter: blur(5px)
			h5, p
				visibility: hidden
		.expandup
			height: 24px
			margin-bottom: 12px
			width: 100%
			display: flex
			flex-direction: row
			align-items: center
			justify-content: center
			transform-origin: center center
		.mobilesidebar
			height: 100vh
			background: white
			justify-content: space-between
			top: 0
			left: 0
			h5, p
				visibility: visible
			h5
				font-size: 1.2rem
			p
				font-size: 1rem
			padding-top: 90px
			padding-left: 16px
			padding-right: 16px
			margin-top: 0
			.expandup
				transform: rotate(180deg)
				bottom: 0
				svg
					path
						fill: #474747
	.icons .boxc
		width: 30%
		img
			object-fit: cover
			height: 48px
			width: 48px
			margin-left: auto
			margin-right: auto
			margin-bottom: 8px
		small
			font-size: 10px
	.coursesection
		padding-left: 16px
		padding-right: 16px
	.contentscontainer
		display: flex
		flex-direction: column
		padding-top: 24px
		gap: 16px
		padding-bottom: 8px
		.boxc
			width: 100%
			border-bottom: 1px solid #f1f1f1
			padding-bottom: 8px
			padding-top: 0
		p
			font-weight: bold
			margin: 0 0 8px 0
			text-transform: capitalize
			padding-top: 0
		small
			font-size: 12px
			color: #878787
		.corcontent
			font-weight: 400 !important
			font-size: 0.875rem !important
	.takes
		gap: 8px
		border-bottom: 1px solid #f1f1f1
		padding-bottom: 8px
		flex-direction: column
		padding-top: 24px
		.boxc
			width: 100%
			height: max-content
			margin-bottom: 12px
	.instruct
		padding-top: 24px
		gap: 8px
		margin-bottom: 32px
		border-bottom: 1px solid #f1f1f1
		flex-direction: column
	.instruct img
		object-fit: cover
		width: 100%
		height: 200px	
		margin-bottom: 16px		


</style>