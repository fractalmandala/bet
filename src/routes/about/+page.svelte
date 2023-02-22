<script>
import supabase from '$lib/db'

export async function getCourses(){
	const { data, error } = await supabase
	.from('brhat-drashta2')
	.select()
	.eq('type','overview')
	.order('id')
	.limit(3)
	if (error) throw new Error(error.message)
	return data
}
export async function getArticles(){
	const { data, error } = await supabase
	.from('brhat-bet')
	.select()
	.eq('type','Article')
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}
export async function getArticle(){
	const { data, error } = await supabase
	.from('brhat-iks')
	.select()
	.order('seq',{ascending: false})
	if (error) throw new Error(error.message)
	return data
}
export async function getVideos(){
	const { data, error } = await supabase
	.from('brhat-youtube')
	.select()
	.eq('type','iks')
	.limit(6)
	if (error) throw new Error(error.message)
	return data
}

</script>


<div class="c-c-c-c container-col istop l1">
	<h2 class="h2type" data-textify>
		The application of IKS throughout curricula is essential to the preservation of our civilizational memory.
	</h2>	
	<h5>	
	We partner with public and private institutions on IKS implementation, participate in and facilitate programs, and undertake awareness activities. We believe that the IKS (Indian Knowledge System) is critical to reimagining how multiple strands of knowledge are viewed.
	</h5>
</div>
<h2 class="adj">Focus Areas</h2>
<div class="container-row l2" data-textify>
			<div class="c-c-c-c the-ites ite1">
				<img class="icon" src="/images/icon-curr.png" alt="icon" />
				<h5 class="specialtext">Curriculum Building</h5>
				<p>
				Bṛhat offers support for curriculum development. The principles of curriculum building in the Indian Knowledge System work differently as there is no separation or hierarchy of subjects or topics.  This is equally true for pedagogies that are to be followed for IKS-based curriculum. 
				</p>
			</div>
			<div class="c-c-c-c the-ites ite2">
				<img class="icon" src="/images/icon-nep.png" alt="icon" />
				<h5 class="specialtext">NEP-IKS Implementation</h5>
				<p>
				One of the objectives of the National Education Policy is to use and integrate the Indian Knowledge Systems in curriculum and pedagogies across higher education institutions. Also, NEP implementation is not just about creating new courses but also to make students, faculty, staff and parents informed about the potential that IKS holds. 
				</p>
			</div>
			<div class="c-c-c-c the-ites ite1">
				<img class="icon" src="/images/icon-nep.png" alt="icon" />
				<h5 class="specialtext">Competency Development</h5>
				<p>
				Any task of IKS integration and implementation would be insufficient if human resources in the respective areas are not created. Bṛhat has been partnering with AICTE on its various initiatives. Bṛhat intends to conduct capacity building workshop for faculties in higher educational institutions, and create a critical network of likeminded individuals, who further contribute to mainstreaming of IKS curriculum and pedagogies. 
				</p>
			</div>
			<div class="c-c-c-c the-ites ite2">
				<img class="icon" src="/images/icon-ld.png" alt="icon" />
				<h5 class="specialtext">Learning Design</h5>
				<p>
				IKS integration and implementation would not be possible without thinking about it from a design perspective. An IKS based design that provides pillars to any IKS course. Bṛhat envisages itself as a nodal agency, helping institutions digitize their curriculum and pedagogies, and also introducing learning designs that are compatible with IKS thinking. In addition to assisting institutions and organizations with the incorporation of IKS into their daily operations, Bṛhat wants to create in-house expertise in education, psychology, political-comparative philosophy and public policy. These three topics are central to Bṛhat's work and are therefore given priority for IKS redesign. 
				</p>
			</div>
</div>
<h2 class="adj">Bṛhat Draṣṭā</h2>
<div class="container-col l6">
<h5>
	Bṛhat Draṣṭā is an offering in deep learning on some of the greatest ancient and contemporary philosophers (draṣṭās) and schools of thoughts (darśana). It imparts the ways of looking and seeing, darśana, so that the learners can proceed on the path of being draṣṭās.
</h5>
	{#await getCourses()}
	<small>...</small>
	{:then data}
	<div class="r-r-r-r courses-row">
		{#each data as item}
		<div class="c-c-c-c course-box">
			<img src={item.image} alt={item.id} />
			<h5>{item.name}</h5>
			<p>{item.content.slice(0,250)}...</p>
		</div>
		{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>
<h2 class="adj">IKS Primers</h2>
	<div class="container-col l4">
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
	<div class="container-col vidsbids">
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
<div class="container-col isbot l5">
	{#await getArticle()}
	<small>...</small>
	{:then data}
	<h2 class="theteal adj theh">Events We Have Partnered On</h2>
	<div class="container-row l22">
	{#each data as item}
		<div class="c-c-c-c l22a">
		<h4>{item.name}</h4>
		<div class="r-r-r-r l22arow">
		<p>{item.dates}</p>
		<p>{item.venues}</p>
		<p>{item.themes}</p>
		</div>
		</div>
	{/each}
	</div>
	{:catch error}
	<pre>{error}</pre>
	{/await}
</div>



<style>
	.l22arow p { text-transform: capitalize;}
.course-box h5 { text-transform: capitalize;}
.l2 .col-l img {
	object-fit: cover;
	width: 100%;
}
.l2 h5 {
	font-weight: 400;	
}
.the-ites h5 {
	font-weight: 600;
	margin-bottom: 16px;
}

.h2type { color: #f06449;}

.course-box img {
	object-fit: cover;
	width: 100%;
	height: 200px;
}
@media screen and (min-width: 900px) {
	.theh { margin-top: 120px; margin-left: 6vw; margin-bottom: 42px;}
	.vidsbids { justify-content: center; align-items: center;}
	.l22 { justify-content: space-between; flex-wrap: wrap;}
	.l22a { width: 49%; height: auto; margin-bottom: 1em; justify-content: space-between; align-items: space-between;}
	.l22a h4 {margin-top: 0; margin-bottom: 8px;}
	.l22arow { gap: 24px;}
	.l22arow p { font-weight: 400; font-size: 1em; margin-top: 0; color: #878787;}
	.l1{ height: 80vh; padding: 0 6vw; justify-content: center;}
	.l2 { padding: 0 6vw 8em 6vw; width: 100%; flex-wrap: wrap; }
	.icon {object-fit: contain; width: 64px; height: 64px; margin-left: auto; }
	.l1 h5 { font-weight: 300;}
	.the-ites { width: calc(50% - 4em);align-items: flex-start;}
	.the-ites img { margin-left: 0;}
	.the-ites p {
		margin-top: 0;
	}
	.item-row { flex-wrap: wrap; gap: 2em; width: 100%;}
	.read-box { width: calc(50% - 3em); border-bottom: 1px solid #d7d7d7; padding-bottom: 4px;}
	.read-box h5 { font-weight: 700; margin-bottom: 8px; margin-top: 0; transform-origin: center left; transition: all 0.12s var(--cube1);}
	.read-box h5:hover { transform: scale(0.95);}
	.read-box p { color: #878787; margin-top: 8px;}
	.isbot { padding-bottom: 80px !important; }
	.specialtext { text-align: right;}
	.ite2 { margin-left: 2em;}
	.the-vidboy { flex-wrap: wrap; margin-top: 1em; gap: 1em; padding-top: 4em;}
	.item-box { height: 240px;}
	.l1{ height: 100vh; justify-content: center;}
	.l2 { width: 100%; flex-wrap: wrap; gap: 4em;}
	.l5 { width: 100%; align-items: space-between; padding-left: 0 !important; padding-right: 0 !important;}
	.course-box {
		width: 30%;
	}
	.courses-row {
		justify-content: space-between;
	}
}

@media screen and (max-width: 899px) and (min-width: 768px) {

	.l22 { justify-content: flex-end; flex-wrap: wrap;}

	.l22a { gap: 16px; margin-top: -2em; width: 100%;}
	.l22a p { font-weight: 400; font-size: 1.12em; margin-top: 0; border-bottom: 1px solid #d7d7d7; padding-bottom: 12px;}
  .l22arow { gap: 16px;}

	.l1{ height: 100vh; justify-content: center;}
	.l2 { width: 100%; flex-wrap: wrap; gap: 4em;}
	.icon {object-fit: contain; width: 64px; height: 64px; margin-right: auto; }
	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 1em;}
	.item-box { width: calc(33.33% - 1em);}
	.the-vidboy { flex-wrap: wrap; gap: 16px;}
	.specialtext { text-align: right;}
	.course-box { width: calc(33% - 16px);}
	.courses-row { justify-content: space-between;}
	.the-ites { text-align: left; align-items: flex-start;}
	.read-box h5 { margin-bottom: 4px;}
	.read-box { margin-bottom: 12px;}
}

@media screen and (max-width: 767px) {
	.adj { margin-bottom: 0; margin-top: 64px;}
	.l22 { flex-wrap: wrap;}
	.l22arow { flex-wrap: wrap;}
	.l22arow p { width: 100%; margin-top: 0; margin-bottom: 8px;}
.icon {object-fit: contain; width: 90px; height: 64px; margin-left: auto; margin-right: auto; }
	.the-vidboy { flex-wrap: wrap;}
	.the-ites { width: 100%;}
	.the-ites h5 { text-align: left;}	
	.the-ites img { margin-left: 0;}
	.stickercol .textcol p { font-size: 1.4em;}
	.item-row { flex-wrap: wrap; gap: 2em;}
	.item-box { width: 100%; margin-bottom: 1em; height: 240px;}
	.specialtext { text-align: center; font-size: 1.6em;}
	.l2 { flex-wrap: wrap;}
	.l5 { padding-left: 0; padding-right: 0;}
	.l4 { padding-bottom: 4em;}
	.read-box p { 
		font-size: 16px;
		font-weight: 300;
		margin-top: 0px;
		}
	.read-box h5 {
		margin-top: 8px;}
	.l22a { width: 100%;}
	.l22a h4 { font-size: 24px;}
	.l22a p { font-size: 16px;}
	.courses-row { flex-wrap: wrap;}
	.course-box { width: 100%; margin-bottom: 32px;}
	.course-box img { height: 240px;}
}
</style>