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
		Each individual life is a unique and intricate tapestry, woven from the threads of biology,
		culture, and experience. The study of human evolution and counseling is a fascinating and
		ever-evolving field that seeks to understand the complex forces that shape our lives. For
		centuries, scientists from the East and West have recognized the kaleidoscopic nature of human
		nature. In recent years, there has been a growing movement to move beyond Euro-American theories
		and explore culturally rooted perspectives on human development and well-being. This is a
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
			<p>4 Sessions Every Weekend</p>
		</div>
		<div class="rta-column">
			<img src="/images/icon-rupee.png" alt="fees" />
			<p>₹62500 | $1300</p>
			<small>Excluding GST</small>
		</div>
	</div>
</div>
<div class="rta-column third fluid">
	<h4>Course Introduction</h4>
	<h5 style="font-weight: 400; line-height: 1.4; margin-bottom: 24px">
		Welcome to Samīkṣaṇā – a transformative journey into the depths of human existence,
		consciousness, and evolution. In a world where each life story is an intricate biography, woven
		by the threads of circumstance, choice, and opportunity, the narratives of humanity are as
		diverse as they are boundless.
	</h5>
	<h5 style="font-weight: 400; line-height: 1.4; margin-bottom: 24px">
		Embark on this remarkable exploration as we intertwine the wisdom of modern and traditional
		epistemes, seamlessly blending the insights of different eras. Samīkṣaṇā draws from both the
		Orient and the Occident, forging an interdisciplinary approach that casts a brilliant light on
		the 'HUMAN' in its entirety. Central to our odyssey lies a profound curiosity about the rhythm
		and essence of people's lives. How do we decipher the enigma of our existence? This
		ground-breaking multidisciplinary study transcends conventional boundaries, weaving together
		threads from psychology, philosophy, embryology, political science, musicology, economics,
		naturopathy, Vedanta and beyond.
	</h5>
	<h5 style="font-weight: 400; line-height: 1.4; margin-bottom: 24px">
		Dive into the heart of comprehending human evolution, not just as a passive observer, but as an
		engaged participant. Samīkṣaṇā opens a window into the collective journey of the human species –
		an invitation to explore your own path and the journeys of fellow beings. In an era where stress
		and emotional challenges are prevalent, mental well-being often takes a back seat. This is where
		Samīkṣaṇā steps in, emerging as a timely and essential endeavour. With a confluence of twenty
		trans-disciplinary perspectives from both the East and the West, this course seeks to address
		the question of 'Why Are We The Way We Are?' with profound depth and cultural sensitivity.
	</h5>
	<h5 style="font-weight: 400; line-height: 1.4; margin-bottom: 24px">
		With roots in Indian Knowledge Systems (IKS) and a blend of diverse traditions Sāmikṣaṇā fuses
		timeless wisdom with present understanding, revealing the profound tapestry of human existence.
		Step into a realm of self-discovery, understanding, and transformation, where the mysteries of
		evolution intertwine with clarity and connection, transcending time and traditions.
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
1. Delve into the intricate elements shaping an individual's mind, understanding how thoughts, emotions, and experiences come together to define who we are.
2. Gain insights into the holistic factors that mould our personalities, considering diverse influences such as culture, experiences, and genetics. 
3. Discover empowering insights across all dimensions of human existence, fostering a resilient approach to life's challenges.
4. Enhance interpersonal skills for effective relationships with oneself and others, honing abilities crucial for personal and professional success. 
5. Acquire profound insights to excel professionally while fostering mental health, adeptly navigating diverse contexts from families to workplaces. 
6. Uncover your role in society, forging a clear path to a meaningful and fulfilling life, guided by fundamental principles. 
7.  Explore the intricate interplay between the physical, mental, and spiritual dimensions, fostering a balanced and harmonious existence. 
8.  Deepen cultural understanding and widen worldviews through interdisciplinary exploration, enriching perspectives on global issues. 
9. Equip yourself to embrace leadership roles with the ability to shoulder expectations, blending ancient wisdom with modern demands. 
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
