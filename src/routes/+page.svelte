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
	<div class="c-c-c-c ff img1">
	</div>
	<div class="container-col l1 istop">
		<h3 data-textify>OUR VISION</h3>
		<h1 data-textify class="ish1">
			Within the next 15 years,
		</h1>
		<h2 data-textify class="isp">
			no child should finish education without being familiarized to Nāṭyaśastra, Tarkaśāstra, Yogasūtra and Aṣṭadhyāyī; and without having accessed Itihāsa-Purāṇa.
		</h2>
	</div>
	<div class="container-row l2">
		<div class="c-c-c-c col-l">
			<img src="/images/imageforkey.webp" alt="indian students studying" />
		</div>
		<div class="c-c-c-c col-r">
			<h5 data-textify>At Bṛhat, we conceptualize IKS as a universal episteme, which is rooted in and derived from our millennia-long civilizational knowledge and values.</h5>
			<h5 class="theteal" data-textify>Explore our framework and models here:</h5>
			<h4><a href="/docs/iksrepository" data-textify>Indian Knowledge Repository</a></h4>
			<h4><a href="/docs/shastrikaframework" data-textify>The Śāstrika Framework</a></h4>
			<h4><a href="/docs/vastuandvaastu" data-textify>Vastu and Vāstu</a></h4>
		</div>
	</div>
	<div class="container-col l3">
		<h2 class="theteal">Focus Areas</h2>
		<div class="r-r-r-r the-gridboy">
			<div class="c-c-c-c the-ites">
				<img class="icon" src="/images/icon-curr.png" alt="icon" />
				<h5 class="specialtext the-blue">Curriculum Building</h5>
				<p>
				Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
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
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
				</p>
			</div>
			<div class="c-c-c-c the-ites">
				<img class="icon" src="/images/icon-ld.png" alt="icon" />
				<h5 class="specialtext the-blue">Learning Design</h5>
				<p>
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
				</p>
			</div>
		</div>
	</div>
	<div class="container-col l4">
		<h2 class="theteal">IKS Primers</h2>
			{#await getArticles()}
			<small>...</small>
			{:then data}
			<div class="r-r-r-r textcol item-row">
				{#each data as item}
				<div class="c-c-c-c read-box" data-textify>
					<h5><a href={item.link}>{item.name}</a></h5>
					<p>{item.author}</p>
				</div>
				{/each}
			</div>
			{:catch error}
			<pre>{error}</pre>
			{/await}
		</div>
		<div class="container-col l5 isbot">
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



<style>
.img1 { z-index: 999; background-image: url('/images/about-parambika.png')}
.l1 h3 { color: #979797;}
.ish1 { margin-bottom: 0;}
.isp { margin-top: 12px;}
.l2 .col-l img {
	object-fit: cover;
	width: 100%;
}
.l2 h5 {
	font-weight: 400;	
}
.the-ites h5 {
	font-weight: 600;
	color: var(--teal);
	margin-bottom: 16px;
}
.l2 .col-r h4 {
	text-transform: uppercase;
	font-weight: 800;
	margin-top: 16px;
	margin-bottom: 2px;
	padding-bottom: 16px;
	border-bottom: 1px solid #d7d7d7;
	transform-origin: center left;
	transition: all 0.17s var(--cube3);
	color: #474747;
}
.l2 a {
	transform-origin: center left;
	transition: all 0.17s var(--cube3);
}

.l2 .col-r h4:hover {
	transform: scale(0.95);
}

.l2 .col-r .theteal {
	margin-bottom: 32px;
}

.ish1 {
	color: var(--red);
}


@media screen and (min-width: 900px) {
	.l2 .col-r h4 { font-size: 32px;}
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }
	.l2 .col-l { width: 40%;}
	.l2 .col-r { width: 60%; height: 100%;}
	.l2 .col-r {
		padding-left: 4vw;
		padding-right: 4vw;
	}
	.l2 { padding-top: 2em;}
 .l3 .theteal, .l4 .theteal {
		font-size: 80px;
		margin-bottom: 32px;
	}

	.the-ites { width: calc(45% - 2vw); margin-right: 2vw; margin-left: 2vw; margin-bottom: 2em; align-items: flex-start;}
	.the-ites img { margin-left: 0;}
	.the-ites p {
		margin-top: 0;
	}

	.item-row { flex-wrap: wrap; gap: 2em; width: 100%;}
	.read-box { width: calc(50% - 3em); border-bottom: 1px solid #d7d7d7; padding-bottom: 4px;}
	.read-box h5 { font-weight: 700; margin-bottom: 8px; margin-top: 0; transform-origin: center left; transition: all 0.12s var(--cube1);}
	.read-box h5:hover { transform: scale(0.95);}
	.read-box p { color: #878787; margin-top: 8px;}
	.item-box { width: calc(33.33% - 1em);}
	.specialtext { text-align: right;}

	.the-gridboy { width: 100%; flex-wrap: wrap; margin-top: 1em;}
	.the-vidboy { flex-wrap: wrap; margin-top: 1em; gap: 1em; padding-left: 4vw; padding-right: 4vw; padding-top: 4em;}
	.item-box { height: 240px;}
}

@media screen and (max-width: 899px) and (min-width: 768px) {
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }

	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(33.33% - 1em);}
	.specialtext { text-align: right;}

}

@media screen and (max-width: 767px) {
.icon {object-fit: contain; width: 90px; height: 64px; margin-left: auto; margin-right: auto; }
	.l5 { padding-bottom: 4em;}
	.the-gridboy { flex-wrap: wrap;}
	.the-vidboy { flex-wrap: wrap;}
	.the-ites { width: 100%;}
	.the-ites h5 { text-align: left;}	
	.the-ites img { margin-left: 0;}
	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 2em;}
	.item-box { width: 100%; margin-bottom: 1em; height: 240px;}
	.specialtext { text-align: center; font-size: 1.6em;}
	.read-box p { margin-bottom: 0; font-weight: 300; font-size: 1.12em; margin-top: 0;}
	.read-box h5 { margin-bottom: 12px;}

	.l2 { flex-wrap: wrap;}

}
</style>