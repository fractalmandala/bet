<script>
import supabase from '$lib/db'
export async function getArticles(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','Article')
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}
export async function getVideos(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','Video')
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}
</script>
	<div class="imagecontainer-hero">
	</div>
	<div class="primecontainer-row">
		<div class="c-c-c-c a1cl">
			<img src="/images/visionimage.webp" alt="vision"/>
		</div>
		<div class="c-c-c-c a1cr">
			<h3 class="the-blue">The Vision</h3>
			<p class="big-guy">
				<span class="the-blue">Within the next 15 years</span>, no child should finish education without being familiarized to Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having <span class="the-blue">accessed Itihāsa-Purāṇa.</span>
			</p>
		</div>
	</div>
	<div class="r-r-c-c stickercol">
		<div class="c-c-c-c headingcol">
			<h3 class="the-blue">Framework</h3>
		</div>
		<div class="c-c-c-c textcol">
			<p>
				At Bṛhat, we conceptualize IKS as a <span class="the-blue bold">universal episteme,</span> which is rooted in and derived from our millennia-long civilizational <span class="the-blue bold">knowledge and values</span>.
			</p>
			<img src="/images/schemafinal.png" alt="schemamain" />
		</div>
	</div>
	<div class="r-r-c-c stickercol">
		<div class="c-c-c-c headingcol">
			<h4 class="the-blue">Bṛhat as Implementation Partner</h4>
		</div>
		<div class="c-c-c-c textcol">
			<p>
				As the application of IKS throughout curricula is essential to the preservation of our civilizational memory, Bṛhat hopes to play a part in its implementation. We, at Bṛhat, understand the complexity involved in this herculean task. It would be impossible for a small institution like Bṛhat to focus on all aspects of Indian curricula; thus, we wish to concentrate our efforts on the subjects in which we have expertise. 
			</p>
			<p>
				We wish to partner with the government and other organizations on IKS implementation, participate in various programs, and undertake awareness activities.  Because the IKS (Indian Knowledge System) is critical to reimagining how multiple strands of knowledge are viewed, Bṛhat intends to work in the following areas to aid in the implementation of the IKS.
			</p>
		</div>
	</div>
	<div class="r-r-c-c stickercol2 sticktypeA">
		<div class="c-c-c-c textcol">
			<p>
				Bṛhat offers support for curriculum development. The principles of curriculum building in the in the Indian Knowledge Systems work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum.
			</p>
		</div>
		<div class="c-c-c-c headingcol">
			<h5 class="specialtext the-blue">Curriculum Building</h5>
			<img class="icon" src="/images/icon-curr.png" alt="icon" /> 
		</div>
	</div>
	<div class="r-r-c-c stickercol2">
		<div class="c-c-c-c headingcol">
			<h5 class="the-blue">NEP-IKS Implementation</h5>
			<img class="icon2" src="/images/icon-nep.png" alt="icon" /> 
		</div>
		<div class="c-c-c-c textcol">
			<p>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
			</p>
		</div>
	</div>
	<div class="r-r-c-c stickercol2 sticktypeA">
		<div class="c-c-c-c textcol">
			<p>
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with the Ministry of Education's IKS Center of Excellence (CoE) at AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of like-minded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
			</p>
		</div>
		<div class="c-c-c-c headingcol">
			<h5 class="specialtext the-blue">Competency Building</h5>
			<img class="icon" src="/images/icon-comp.png" alt="icon" /> 
		</div>
	</div>
	<div class="r-r-c-c stickercol2">
		<div class="c-c-c-c headingcol">
			<h5 class="the-blue">Learning Design</h5>
			<img class="icon2" src="/images/icon-ld.png" alt="icon" /> 
		</div>
		<div class="c-c-c-c textcol">
			<p>
				Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
			</p>
		</div>
	</div>
	<div class="r-r-c-c stickercol formargin">
		<div class="c-c-c-c headingcol">
			<h3 class="the-blue">Articles and Videos</h3>
		</div>
		{#await getArticles()}
		<small>...</small>
		{:then data}
		<div class="r-r-c-c textcol item-row">
			{#each data as item}
			<div class="c-c-c-c item-box">
				<p><b><a href={item.link}>{item.name}</a></b></p>
				<small>{item.author}</small>
			</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>
	<div class="r-r-c-c stickercol">
		<div class="c-c-c-c headingcol"></div>
		{#await getVideos()}
		<small>...</small>
		{:then data}
		<div class="r-r-c-c textcol item-row">
			{#each data as item}
			<div class="c-c-c-c item-box">
				<iframe width="100%" height="100%" src="https://www.youtube.com/embed/{item.videoid}" title={item.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>








<style>
.imagecontainer-hero { z-index: 999; background-image: url('/images/about-parambika.png')}
.a1cr { z-index: 2;}
.a1cl { z-index: 1;}

@media screen and (min-width: 900px) {
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }
	.icon2 {object-fit: contain; width: 64px; height: 64px; margin-right: auto; }
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
		align-self: flex-start;
		margin-top: 6em;
		padding-left: 2em;
		padding-right: 2em;
		padding-top: 1em;
	}

	.stickercol .textcol img, .stickercol2 .textcol img {
		object-fit: contain;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.stickercol, .stickercol2 {
		padding-left: 12vw;
		padding-right: 12vw;
		margin-bottom: 2em;
		gap: 2em;
	}

	.stickercol .headingcol, .stickercol2 .headingcol { width: 25vw;}
	.stickercol .headingcol h5, .stickercol2 .headingcol h5 { margin-bottom: 0; font-size: 1.6em; margin-top: 0.5em;}
	.stickercol .textcol, .stickercol2 .textcol { width: 75vw; border-top: 1px solid #d7d7d7; padding-top: 1em;}
	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(33.33% - 1em);}
	.formargin { margin-top: 4em;}
	.specialtext { text-align: right;}
	.big-guy { font-size: 2em; font-weight: 300; margin-top: 0;}
	h3 { font-weight: 800; margin-bottom: 0.25em;}

}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }
	.icon2 {object-fit: contain; width: 64px; height: 64px; margin-right: auto; }
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
		margin-left: -90%;
		text-align: left;
		background-color: white;
		height: max-content;
		align-self: flex-start;
		margin-top: 6em;
		padding-left: 2em;
		padding-top: 1em;
	}

	.stickercol .textcol img, .stickercol2 .textcol img {
		object-fit: contain;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.stickercol {
		padding-left: 6vw;
		padding-right: 6vw;
		margin-bottom: 2em;
		flex-wrap: wrap;
		gap: 2em;
	}
	
	.stickercol2 {
		padding: 0 6vw;
		margin-bottom: 2em;
		flex-wrap: wrap;
		gap: 1.5em;
	}

	.stickercol .headingcol { width: 100%;}
	.stickercol .headingcol h3, .stickercol .headingcol h4, .stickercol2 .headingcol h3, .stickercol2 .headingcol h4 { margin-top: 2em; margin-bottom: 0;}
	.stickercol .headingcol h5, .stickercol2 .headingcol h5 { margin-bottom: 0.5em; font-size: 1.6em; margin-top: 0.5em;}
	.stickercol .textcol { width: 100%; border-top: 1px solid #d7d7d7; padding-top: 1em;}
	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(33.33% - 1em);}
	.formargin { margin-top: 4em;}

	.stickercol2 .headingcol { width: 24%;}
	.stickercol2 .textcol { width: 70%; border-top: 1px solid #d7d7d7;}
	.specialtext { text-align: right;}

}

@media screen and (max-width: 767px) {
.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; margin-right: auto; }
.icon2 {object-fit: contain; width: 64px; height: 64px; margin-right: auto; margin-left: auto; }

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
		text-align: left;
		background-color: white;
		height: max-content;
		align-self: flex-start;
		padding: 0 4vw;
	}

	.stickercol .textcol img, .stickercol2 .textcol img {
		object-fit: contain;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
	}

	.stickercol {
		padding-left: 4vw;
		padding-right: 4vw;
		margin-bottom: 2em;
		flex-wrap: wrap;
		gap: 2em;
	}
	
	.stickercol2 {
		padding: 0 4vw;
		margin-bottom: 2em;
		align-items: center;
		flex-wrap: wrap;
		gap: 2em;
	}

	.sticktypeA {
		flex-direction: column-reverse;
	}

	.stickercol .headingcol { width: 100%;}
	.stickercol .headingcol h3, .stickercol .headingcol h4, .stickercol2 .headingcol h3, .stickercol2 .headingcol h4 { margin-top: 2em; margin-bottom: 0;}
	.stickercol .headingcol h5, .stickercol2 .headingcol h5 { margin-bottom: 0.5em; font-size: 1.6em; margin-top: 0.5em; text-align: center;}
	.stickercol .textcol { width: 100%; padding-top: 1em;}
	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(100% - 2em);}
	.formargin { margin-top: 4em;}
	.specialtext { text-align: center;}
	.stickercol2 .headingcol { width: 100%;border-top: 1px solid #d7d7d7; }
	.stickercol2 .textcol { width: 100%; }
}
</style>