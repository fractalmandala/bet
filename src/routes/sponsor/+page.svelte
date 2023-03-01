<script>
import supabase from '$lib/db'
export async function getArticles(){
	const { data, error } = await supabase
	.from('brhat-iks')
	.select()
	.order('seq',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
</script>

<div class="c-c-c-c container-row istop l1">
	<div class="c-c-c-c l1b">
		<img src="/images/dcf2.png" alt="dcf" />
	</div>
	<div class="c-c-c-c spline l1a">
		<h2>
			Sponsor Bṛhat's Dhārmika Culture Engine
		</h2>
		<p class="blk">
			Bṛhat is a culture engine that powers culture creatives which draw from a deep pool of Dharmika heritage, research and design culture-compatible public policy and Indian Knowledge system-based frameworks for education, and ecology and builds leadership with cultural cognition that’s essential to the Overton window shift. We convert individual, collective and institutional cultural intent into action.
		</p>
		<p class="blk">
			In education, ecology, policy, storytelling and media, organization and design- in all these fields and more, we are a creatives, research and leadership organization that:<br><br>
			1. Draws from the deep pool of dharma to create cultural content in written, audio and visual forms. Our creative output across multiple channels represents culture, civilization and the essential Hindu consciousness.<br>
			2. Lays a roadmap for creating culture-compatible policy and culture-rooted organisational capability. Here our work on policy research and frameworks is intended to enable dharmic operating systems to life, through which we can reorient State and society to operate with IKS as the code.<br>
			3. Builds culture-cognition that can last the generation, because all efforts at culture in action boil down to cognition embodied inter-generationally. Our projects in design thinking, organizational leadership and IKS furtherance are intended to serve this cause.
		</p>
		<h3 class="theblue">
			To support our work and help keep the engine running, you can contribute directly by sending funds on this QR code below:
		</h3>
		<img class="qrcode" src="/images/qrcode.png" alt="qrcode" />
		<h3>You can also read more about our work so far, planned roadmap, and contribute to the culture engine at our crowdfunding campaign live at Dharmic Crowdfunding.</h3>
		<button><a href="https://dharmiccrowdfunding.com/product/sponsor-a-dharmic-culture-engine-by-b%e1%b9%9bhat-phase-1-seed-fund/" target="_blank" rel="noreferrer">Visit DCF and Sponsor</a></button>
	</div>

</div>
<style>

.l1b img { object-fit: cover; width: 100%; height: 100%;}

@media screen and (min-width: 768px) {
	.qrcode {
		object-fit: contain;
		width: 700px;
	}
	.l1{ height: 100%; justify-content: center;}
	.istop { padding-top: 120px;}
	.l1a { width: 80%; height: 100%; padding-right: 48px;}
	.l1b { width: 40%; height: 100%;}
	h3 { margin-top: 12px; margin-bottom: 32px;}
	.l1a button { margin-bottom: 32px;}
}

@media screen and (max-width: 767px) {
	.qrcode {
		object-fit: contain;
		width: 300px;
	}
	.l1 { flex-wrap: wrap; padding-bottom: 32px;}
	.l1a, .l1b { width: 100%;}
	.l1b { order: 1;}
	.l1a { order: 2;}
	h3 { margin-top: 16px; margin-bottom: 16px;}
}

</style>