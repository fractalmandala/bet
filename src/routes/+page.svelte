<script lang="ts">
import { onMount } from 'svelte';
import LocomotiveScroll from 'locomotive-scroll';
import Footer from '$lib/components/globals/Footer.svelte'

let scroll;

onMount(() => {
    const container = document.querySelector('[data-scroll-container]');
    if (container) {
        scroll = new LocomotiveScroll({
            el: container as HTMLElement,
            smooth: true,
						reloadOnContextChange: true,
						repeat: true
        });
    }
});
</script>

<div class="lococont" data-scroll-container>
	<div class="imagecontainer-hero" data-scroll-section>
	</div>
	<div class="primecontainer-row" data-scroll-section>
		<div class="c-c-c-c a1cl">
			<img src="/images/visionimage.webp" alt="vision" data-scroll data-scroll-speed="2" />
		</div>
		<div class="c-c-c-c a1cr" data-scroll data-scroll-speed="6" data-scroll-direction="horizontal">
		<h3>The Vision</h3>
		<h4>
			<span class="colorange">Within the next 15 years</span>, no child should finish education without being familiarized to Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having <span class="colorange">accessed Itihāsa-Purāṇa.</span>
		</h4>
		</div>
	</div>

	<div class="primecontainer-col schemawall" data-scroll-section>
		<div class="c-c-c-c a2cr" data-scroll data-scroll-speed="6">
		<h3>Framework</h3>
		<h4>
			At Bṛhat, we conceptualize IKS as a <span class="blue bold">universal episteme,</span> which is rooted in and derived from our millennia-long civilizational <span class="blue bold">knowledge and values</span>.
		</h4>
		<img src="/images/schemafinal.png" alt="schemamain" />
		</div>
		<div class="r-r-c-c off-button" data-scroll data-scroll-speed="4">
			<button><a href="/docs/vastuandvaastu">Vastu and Vāstu</a></button>
			<button><a href="/docs/shastrikaframework">Śāstrika Framework</a></button>
		</div>
	</div>	

	<div class="primecontainer-col" data-scroll-section>
		<h3 data-scroll data-scroll-speed="2">
			Bṛhat as a <span class="blue bold">Key Implementing Partner on IKS-NEP
		</h3>
		<div class="base-row">
			<div class="base-col type1 w50" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
				<img src="/images/icon-curr.png" alt="icon" />
				<h5>
					Curriculum Building
				</h5>
				<small>
					Bṛhat offers support for curriculum development. The principles of curriculum building in the in the Indian Knowledge Systems work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum.
				</small>
			</div>
			<div class="base-col type1 w50" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
				<img src="/images/icon-nep.png" alt="icon" />
				<h5>
					NEP-IKS Implementation
				</h5>
				<small>
					One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
				</small>
			</div>
		</div>
		<div class="base-row">
			<div class="base-col type1 w50" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal">
				<img src="/images/icon-comp.png" alt="icon" />
				<h5>
					Competency Building
				</h5>
				<small>
					Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with the Ministry of Education's IKS Center of Excellence (CoE) at AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of like-minded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
				</small>
			</div>
			<div class="base-col type1 w50" data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">
				<img src="/images/icon-ld.png" alt="icon" />
				<h5>
					Learning Design 
				</h5>
				<small>
					Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
				</small>
			</div>				
		</div>
	</div>



	<div class="primecontainer-col" data-scroll-section>
		<h3>
			Detail to our <span class="blue bold">Vision</span>
		</h3>
		<div class="base-row">
			<div class="base-col type1 w33">
				<h5>
					<a href="/docs/educationasaportal">Education as a Portal Towards Global Wellbeing and Happiness</a>
				</h5>
			</div>
			<div class="base-col type1 w33">
				<h5>
					<a href="/docs/educationrooted">Education - Accessible, Inclusive, and Civilizationally-rooted</a>
				</h5>
			</div>		
			<div class="base-col type1 w33">
				<h5>
					<a href="/docs/reversingthegaze">Changing the “Dristi” - Reversing the Gaze and Providing a More Holistic Perspective </a>
				</h5>
			</div>
		</div> 
		<div class="base-row">
			<div class="base-col w33 video">
				<h5>Strategic Context of IKS</h5>
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/VSekDayc5r8" title="Strategic Context of IKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			<div class="base-col w33 video">
				<h5>Strategy and Roadmap for IKS</h5>
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/rvikbaSHCnU" title="Strategy and Roadmap for IKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>		
			<div class="base-col w33 video">
				<h5>Idea of Scale in IKS</h5>
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/z5j9QXxlPeU" title="Idea of Scale in IKS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
		</div>	
	</div>
	<Footer></Footer>
</div>

<style>
.imagecontainer-hero { z-index: 999; background-image: url('/images/about-parambika.png')}
.w50 img { object-fit: contain; width: 80px; height: 80px; margin-left: auto; margin-right: auto;}
.primecontainer-col, .base-col { text-align: center;}
.primecontainer-col h3 { text-align: center; margin-left: 0; margin-right: 0; padding: 0;}
.w33 { text-align: center;}
.w50 { text-align: center;}

.schemawall {
	background-repeat: no-repeat;
	background-position: center center;
}

.w33 h5 {
	color: #ff3d00;
	border: 1px solid #ff3d00;
	padding: 0.5em 1em;
	border-radius: 4px;
	font-weight: 400;
}

.off-button button {
	background-color: #ff3d00;
	border: none;
	color: white;
	transform-origin: center center;
	transition: all 0.07s ease;
	text-transform: uppercase;
}

.off-button button:hover a {
		color: white;
	}

.off-button button:hover {
	transform: scale(0.9);
}

@media screen and (min-width: 900px) {
	.a1cl {
		width: 60%;
		justify-content: center;
	}

	.a1cl img {
		object-fit: contain;
		height: 88%;
	}

	.a1cr {
		width: 80%;
		margin-left: -40%;
		text-align: left;
		background-color: white;
		height: max-content;
		align-self: flex-end;
		margin-bottom: 6em;
		padding-left: 2em;
		padding-top: 1em;
	}

	.a2cr {
		padding: 0 4vw;
		text-align: center;
	}

	.a2cr img {
		object-fit: contain;
		width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.schemawall {
		background-size: 800px 400px;
	}

	.off-button button {
		padding: 8px 1em;
	}

	.w50 {
		padding: 0;
		width: 40%;
	}

	.base-row {
		margin-top: 1em;
		margin-bottom: 1em;
		gap: 4em;
		justify-content: center;
	}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.a1cl {
		width: 100%;
		justify-content: center;
	}

	.a1cl img {
		object-fit: contain;

		height: 100%;
	}

	.a1cr {
		width: 100%;
		margin-left: -80%;
		text-align: center;
		background-color: white;
		height: max-content;
		align-self: flex-end;
		margin-bottom: 6em;
		padding-left: 2em;
		padding-top: 1em;
	}

	.a2cr {
		padding: 0 4vw;
		text-align: center;
	}

	.a2cr img {
		object-fit: contain;
		width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.schemawall {
		background-size: 800px 400px;
	}

	.off-button button {
		padding: 8px 1em;
	}

	.w50 {
		padding: 0;
		width: 40%;
	}

	.base-row {
		margin-top: 1em;
		margin-bottom: 1em;
		gap: 4em;
		justify-content: center;
	}

}

@media screen and (max-width: 767px) {

	.primecontainer-col, .primecontainer-row {
		padding-top: 2em;
	}
.a1cl {
		width: 100%;
		justify-content: center;
	}

	.a1cl img {
		object-fit: cover;
		height: 100%;
	}

	.a1cr {
		width: 100%;
		text-align: left;
		background-color: white;
		height: max-content;
		align-self: flex-start;
		margin-top: -12em;
		margin-bottom: 6em;
		padding-left: 2em;
		padding-top: 1em;
	}

	.a2cr {
		padding: 0 4vw;
		text-align: center;
	}

	.a2cr img {
		object-fit: contain;
		width: 80%;
		margin-left: auto;
		margin-right: auto;
	}

	.off-button button {
		padding: 8px 1em;
	}

	.w50 {
		padding: 4vw;
		width: 100%;
	}

	.base-row {
		margin-top: 1em;
		margin-bottom: 1em;
		gap: 4em;
		justify-content: center;
	}
	
}
</style>