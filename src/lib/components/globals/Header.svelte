<script>
import { fly } from 'svelte/transition'
import { quintIn } from 'svelte/easing'
let isToggle = false

function toggleMenu() {
	isToggle = !isToggle
}

</script>


<div class="boxr l1000">
	<div class="logoarea">
		<a href="/">
			<p>B<span class="isred">ṛ</span>hat Education</p>
		</a>
	</div>
	<div class="navarea">
		<nav>
			<a href="/vision">Our Gaze</a>
			<a href="/about">Our Work</a>
			<a href="/engage">Engage</a>
			<a href="/sponsor">Support Us</a>
		</nav>
	</div>
	<div class="navmobile">
		<div on:click={toggleMenu} on:keydown={toggleMenu}>
			<img class="menuicon" src="/images/hamburger-white.png" alt="icon" />
		</div>
		{#if isToggle}
		<div class="fs-menu"
		in:fly="{{duration: 200, y: -800, x:0, easing: quintIn}}"
		out:fly="{{duration: 300, y: -800, x: 0, easing: quintIn}}"
		>
		<div class="min-row" on:click={toggleMenu} on:keydown={toggleMenu}>
			<img src="/images/hamburger-close.png" alt="icon" />
		</div>
		<a href="/vision" on:click={toggleMenu}>Our Gaze</a>
		<a href="/about" on:click={toggleMenu}>Our Work</a>
			<a href="/engage" on:click={toggleMenu}>Engage</a>
		<a href="/sponsor" on:click={toggleMenu}>Support Us</a>
		</div>
		{/if}
	</div>
</div>


<style>
.menuicon {
	cursor: pointer;
}

.l1000 {
	height: 64px;
	width: 100%;
	transition: all 0.13s var(--cube1);
	background: linear-gradient(90deg, rgba(6,9,7,0.7) 0%, rgba(39,39,39,0.9) 100%);
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	padding: 0;
	max-width: 100vw;
	overflow-x: hidden;
}

.logoarea { display: flex; flex-direction: row; align-items: center; justify-content: flex-start; height: 56px;}
a { text-decoration: none;}
.navarea a:hover { color: #f06449;}

.logoarea p {
	margin-bottom: 0;
	margin-top: 0;
	text-transform: capitalize;
	font-weight: 700;
	color: white;
	font-size: 32px;
}

.min-row {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}


.fs-menu {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #FFFFFF;
	padding: 4vh 4vw;
}

.fs-menu a {
	color: #474747;
	font-size: 20px;
	text-transform: capitalize;
}

.navarea a {
	font-weight: 400;
	font-size: 14px;
	color: white;
	padding-left: 40px;
	text-transform: uppercase;
	font-family: 'Spline Sans',sans-serif;

}


@media screen and (min-width: 768px) {

	.logoarea { 
		transform-origin: center left;
		transition: all 0.12s ease-out;
	}

	.logoarea:hover {
		transform: scale(0.95);
	}


	.logoarea p {
		font-size: 24px;
		font-weight: 600;
		letter-spacing: 0px;
	}
	.navmobile {
		display: none;
	}
	.navarea {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		text-align: right;
		align-items: center;
	}

	.l1000 { align-items: center;}
	}



@media screen and (max-width: 767px) {
	.boxr {
		align-items: center
	}
	.menuicon {
		object-fit: contain;
		width: 24px;
		height: 24px;
	}
	.l1000 { align-items: center; padding: 0 24px;}
	
	.navarea { display: none;}
	.logoarea p {
		font-size: 24px;
font-weight: 600;
		letter-spacing: 0px;
	}
	.navmobile {
		display: flex;
		flex-direction: column;
	}
	.navmobile a {
		font-size: 3em;
		font-weight: bold;
		letter-spacing: -1px;
		text-transform: uppercase;
	}
	}
</style>