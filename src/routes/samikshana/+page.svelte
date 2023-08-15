<script lang="ts">
	import { onMount } from 'svelte';
	import { samThemes, samSched } from '$lib/utils/supapulls';

	let themes: any;
	let sched: any;

	onMount(async () => {
		themes = await samThemes();
		sched = await samSched();
	});
</script>

<div class="rta-column heading col-cent">
	<div class="logo rta-column col-cent">
		<img src="/images/samlogo.png" alt="samikshana" />
	</div>
	<p>Orient and Occident Perspectives to Human Evolution and Counselling</p>
	<div class="line" />
</div>
<div class="rta-column minH second fluid">
	<h5 style="font-weight: 400; line-height: 1.4">
		Each individual life is a distinct biography. Time and again, scientists from the Orient, as
		well as the Occident, have believed that human nature is kaleidoscopic. The study of Human
		Evolution and Counselling is witnessing an exciting phase of growth; moving beyond the
		Euro-American theories and thus further exploring culturally rooted perspectives. This is a
		distinctive occasion to learn from pioneering experts and secure scholarly insights into the
		field.
	</h5>
	<h6>2 December 2023 - 21 April 2024 | Saturdays and Sundays</h6>
	<div class="rta-grid grid4 stay2">
		<div class="rta-column">
			<img src="/images/icon-timing.png" alt="timings" />
			<p>4 PM to 9 PM IST</p>
		</div>
		<div class="rta-column">
			<img src="/images/icon-duration.png" alt="duration" />
			<p>1.5 Hours each</p>
		</div>
		<div class="rta-column">
			<img src="/images/icon-number.png" alt="number" />
			<p>6/3 - Every Weekend</p>
		</div>
		<div class="rta-column">
			<img src="/images/icon-rupee.png" alt="fees" />
			<p>Rs 70,000 | $1300</p>
		</div>
	</div>
</div>
<div class="rta-column minH third fluid">
	<h4>Adhyayana - The Study</h4>
	<h5 style="font-weight: 400; line-height: 1.4">
		A multidisciplinary, and innovative study integrates 20 diverse perspectives of the Orient
		(Vedic) and the Occident (Modern) to examine the ‘HUMAN’ in its entirety. It combines
		fundamental principles from the fields of Psychology, Philosophy, Embryology, Vedānta, Yoga,
		Āyurveda, Political Science, Musicology, Economics, Neuroscience, Naturopathy, and other related
		disciplines. It will also introduce you to various facets of Counselling, encompassing a broad
		range of culturally sensitive practices that aim to enable individuals to enhance their
		well-being, alleviate distress and improve overall functioning in life.
	</h5>
</div>
<div class="rta-column fourth fluid">
	<h4>The Themes</h4>
	{#if themes && themes.length > 0}
		<div class="rta-grid grid2">
			{#each themes as item}
				<div class="rta-column">
					<h6>{item.theme}</h6>
					<pre>{item.description}</pre>
					<p><strong>Instructor(s):</strong></p>
					<pre>{item.instructor}</pre>
				</div>
			{/each}
		</div>
	{/if}
</div>
<div class="rta-column fifth fluid">
	<h4>Course Details</h4>
	<div class="rta-column">
		<h6>Learner Takeaways:</h6>
		<pre>
1. Explore how thoughts, emotions, and experiences come together to define who you are.
2. How personalities are molded by culture, experience and genetics.
3. Empower yourself with multi-dimensional perspectives on life
4. Enhance interpersonal skills for effective relationships with oneself and others,
5. Acquire profound insights to excel professionally 
6. Connect Mind, Body, and Spirit for a balanced and harmonious existence.
7. Deepen cultural understanding and widen worldviews through interdisciplinary exploration
8. Equip yourself to embrace leadership roles blending ancient wisdom with modern demands.
		</pre>
	</div>
	<div class="rta-column">
		<h6>Course Eligibility</h6>
		<pre>
Anyone between 18-70 years with a 10+2 or equivalent in any stream from a recognized university (min of 50%), interested in exploring diverse perspectives on human nature.
		</pre>
	</div>
	<div class="rta-column">
		<h6>Selection Criteria</h6>
		<pre>
Online Entrance Exam (25 November 2023) followed by a round of Interview (26 November 2023) for shortlisted candidates
		</pre>
	</div>
	<div class="rta-column">
		<h6>Dates To Remember</h6>
		<pre>
Applications Close: 23 November, 2023 (Thursday)
Online Exam: 25 November, 2023 (Saturday) 
Interview: 26 November, Sunday 2023 

First Cut off List for Shortlisted Students:
• 28 November, 2023 (Tuesday) 
• Full fee payment between 12:00 noon on 28 November (Tuesday) till
16:00 hrs on 29 November, 2023 (Wednesday)

Second Cut off List for Shortlisted Students:
• 30 November, 2023 (Thursday) 
• Full fee payment between 12:00 noon on 30 November, 2023
(Thursday) till 16:00 hrs on 1 December, 2023 (Friday)
		</pre>
	</div>
</div>
<div class="rta-column sixth fluid">
	<h4>Course Schedule</h4>
	{#if sched && sched.length > 0}
		<div class="rta-grid grid2">
			{#each sched as item}
				<div class="rta-column">
					<h6>{item.month}</h6>
					<pre>{item.details}</pre>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style lang="sass">

h4
	border-top: 1px solid #6C1039
	padding-top: 32px
	margin-bottom: 32px

.second, .third
	justify-content: flex-start
	h6
		background: #6C1039
		margin-top: 16px
		color: white
		padding: 8px 16px
	h4
		margin-bottom: 32px
	@media screen and (min-width: 1024px)
		padding-left: 160px
		padding-right: 160px
	@media screen and (max-width: 1023px) and (min-width: 769px)
		padding-left: 64px
		padding-right: 64px
	@media screen and (max-width: 768px)
		padding-left: 24px
		padding-right: 24px

.second
	.rta-grid
		margin-top: 32px
		.rta-column
			text-align: center
			p
				font-weight: bold
	@media screen and (min-width: 1024px)
		img
			object-fit: contain
			height: 48px
		.rta-column
			text-align: center
			p
				font-weight: bold
	@media screen and (max-width: 1023px) and (min-width: 769px)
		padding-left: 64px
		padding-right: 64px
		img
			object-fit: contain
			height: 48px
	@media screen and (max-width: 768px)
		padding-left: 24px
		padding-right: 24px
		img
			object-fit: contain
			height: 32px

.fourth
	justify-content: flex-start
	.rta-grid
		row-gap: 32px
		.rta-column
			border-bottom: 1px solid #d7d7d7
			padding-bottom: 16px			
	@media screen and (min-width: 1024px)
		padding-left: 160px
		padding-right: 160px
		padding-bottom: 64px
		.rta-grid
			column-gap: 64px
		h4
			margin-bottom: 32px
		h6
			margin-bottom: 16px
			color: #6C1039
		pre
			margin-top: 0
		p
			margin-top: 8px
			margin-bottom: 8px
	@media screen and (max-width: 1023px) and (min-width: 769px)
		padding-left: 64px
		padding-right: 64px
		pre
			margin-top: 0
		p
			margin-top: 8px
			margin-bottom: 8px
	@media screen and (max-width: 768px)
		padding-left: 24px
		padding-right: 24px
		pre
			margin-top: 0
		p
			margin-top: 8px
			margin-bottom: 8px

.fifth, .sixth
	justify-content: flex-start
	.rta-column
		border-bottom: 1px solid #d7d7d7
		padding-bottom: 0
		padding-top: 24px
	@media screen and (min-width: 1024px)
		padding-left: 160px
		padding-right: 160px
		padding-bottom: 64px
		h4
			margin-bottom: 32px
		h6
			color: #6C1039
			margin-bottom: 16px
		pre
			margin-top: 0
	@media screen and (max-width: 1023px) and (min-width: 769px)
		padding-left: 64px
		padding-right: 64px
	@media screen and (max-width: 768px)
		padding-left: 24px
		padding-right: 24px

.sixth
	.rta-grid
		column-gap: 64px
	padding-bottom: 64px

.heading
	justify-content: center
	@media screen and (min-width: 1024px)
		height: calc(100vh - 64px)
		.logo
			img
				width: 32%
		.line
			height: 1px
			background: #6C1039
			width: 64%
	@media screen and (max-width: 1023px)
		height: calc(100vh - 64px)
		padding-left: 32px
		padding-right: 32px
		.logo
			img
				width: 64%
		.line
			height: 1px 
			background: #6C1039
			width: 64%			
		p
			text-align: center

</style>
