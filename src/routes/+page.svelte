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
			<h1 class="the-blue">The Vision</h1>
			<p class="big-guy">
				<span class="the-blue">Within the next 15 years</span>, no child should finish education without being familiarized to Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having <span class="the-blue">accessed Itihāsa-Purāṇa.</span>
			</p>
		</div>
	</div>

	<div class="r-r-r-r layer2">
		<div class="c-c-c-c primero1">
			<h3 class="big-guy">
				At Bṛhat, we conceptualize IKS as a <span class="the-blue bold">universal episteme,</span> which is rooted in and derived from our millennia-long civilizational <span class="the-blue bold">knowledge and values</span>.
			</h3>
		</div>
		<div class="c-c-c-c primero2">
			<p><a href="/docs/iksrepository">Indian Knowledge Repository</a></p>
			<p><a href="/docs/shastrikaframework">The Śāstrika Framework</a></p>
			<p><a href="/docs/vastuandvaastu">Vastu and Vāstu</a></p>
		</div>
	</div>
	<div class="c-c-c-c layer3">
		<h1 class="the-blue">Focus Areas</h1>
		<div class="r-r-r-r the-gridboy">
			<div class="c-c-c-c the-ites">
				<img class="icon" src="/images/icon-curr.png" alt="icon" />
				<h5 class="specialtext the-blue">Curriculum Building</h5>
				<p>
				Bṛhat offers support for curriculum development. The principles of curriculum building in the in the Indian Knowledge Systems work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum.
				</p>
			</div>
			<div class="c-c-c-c the-ites">
				<img class="icon" src="/images/icon-nep.png" alt="icon" />
				<h5 class="specialtext the-blue">NEP-IKS Implementation</h5>
				<p>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
				</p>
			</div>
			<div class="c-c-c-c the-ites">
				<img class="icon" src="/images/icon-nep.png" alt="icon" />
				<h5 class="specialtext the-blue">Competency Development</h5>
				<p>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
				</p>
			</div>
			<div class="c-c-c-c the-ites">
				<img class="icon" src="/images/icon-ld.png" alt="icon" />
				<h5 class="specialtext the-blue">Learning Design</h5>
				<p>
				Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
				</p>
			</div>
		</div>
	</div>
	<div class="c-c-c-c layer4">
		<h1 class="the-blue">IKS Primers</h1>
		{#await getVideos()}
		<small>...</small>
		{:then data}
		<div class="r-r-r-r the-vidboy">
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
	<div class="c-c-c-c layer5">
		{#await getArticles()}
		<small>...</small>
		{:then data}
		<div class="r-r-c-c textcol item-row">
			{#each data as item}
			<div class="c-c-c-c read-box">
				<p><a href={item.link}>{item.name}</a></p>
				<small>{item.author}</small>
			</div>
			{/each}
		</div>
		{:catch error}
		<pre>{error}</pre>
		{/await}
	</div>



<style>
.imagecontainer-hero { z-index: 999; background-image: url('/images/about-parambika.png')}
.a1cr { z-index: 2; background-color: white;}
.a1cl { z-index: 1;}

@media screen and (min-width: 900px) {
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }
	.a1cl {
		width: 60%;
		justify-content: center;
	}

	.a1cl img {
		object-fit: contain;
		height: 88%;
	}
	.a1cr {
		width: 70%;
		margin-left: -30%;
		text-align: left;
		height: max-content;
		align-self: flex-end;
		margin-bottom: 6em;
		padding-left: 2em;
		padding-right: 2em;
		padding-top: 1em;
	}

	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(33.33% - 1em);}
	.specialtext { text-align: right;}
	.big-guy { font-size: 2em; font-weight: 300; margin-top: 0;}
	.primero2 { width: 40%; padding-left: 2em; padding-right: 2em;}
	.primero1 { width: 60%; padding-left: 4vw; z-index:2; padding-right: 4vw; }

	.primero2 p { font-size: 1.6em; font-weight: 300; text-align: right; padding-right: 4vw; margin-top: 0.05em; margin-bottom: 0.5em; border-bottom: 1px solid #d7d7d7; padding-bottom: 0.5em;}
	.layer2 { height: max-content;}
	.layer3, .layer4, .layer5 { padding-left: 4vw; padding-right: 4vw; margin-top: 4em;}
	.layer5 { padding-bottom: 4em;}
	.layer3 h1 { text-align: left;}
	.the-gridboy { width: 100%; flex-wrap: wrap; margin-top: 1em;}
	.the-ites { width: calc(45% - 2vw); margin-right: 4vw; margin-bottom: 2em;}
	.the-ites h5 { text-align: left;}
	.the-ites p { font-size: 1.12em; font-weight: 300;}
	.the-ites img { margin-left: 0;}
	.the-vidboy { flex-wrap: wrap; margin-top: 1em; gap: 1em;}
	.item-box { height: 240px;}
	.read-box { width: 100%; border-bottom: 1px solid #d7d7d7; padding-bottom: 4px;}
	.read-box p { margin-bottom: 0; font-weight: 600; }
	.read-box small { color: #1C5D99; text-transform: uppercase; font-weight: bold;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }
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
		align-self: flex-end;
		margin-bottom: 2em;
		padding-left: 2em;
		padding-top: 1em;
	}

	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(33.33% - 1em);}
	.specialtext { text-align: right;}
	.big-guy { font-size: 1.6em; font-weight: 300;}

}

@media screen and (max-width: 767px) {
.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; margin-right: auto; }

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
	
	.a1cl img { 
		object-fit: cover;
		width: 100%;
		height: 50vh;
	}

	.a1cr h1 { 
		margin-top: 4vh;
	}

	.big-guy { font-size: 1.44em; font-weight: 300;}
	.layer2 { padding-left: 4vw; padding-right: 4vw; flex-wrap: wrap; margin-top: 2em;}
	.layer3, .layer4, .layer5 { padding-left: 4vw; padding-right: 4vw; margin-top: 2em;}
	.layer5 { padding-bottom: 4em;}
	.the-gridboy { flex-wrap: wrap;}
	.the-vidboy { flex-wrap: wrap;}
	.the-ites { width: 100%;}
	.the-ites h5 { text-align: left;}	
	.the-ites img { margin-left: 0;}
	.primero1, .primero2 { width: 100%;}
	.primero2 p { font-size: 1.6em; font-weight: 300; margin-top: 0; margin-bottom: 1em;}
	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 2em;}
	.item-box { width: 100%; margin-bottom: 1em; height: 240px;}
	.specialtext { text-align: center; font-size: 1.6em;}
	.read-box p { margin-bottom: 0; font-weight: 600; font-size: 1.4em;}
	.read-box small { color: #1C5D99; text-transform: uppercase; font-weight: bold;}
}
</style>