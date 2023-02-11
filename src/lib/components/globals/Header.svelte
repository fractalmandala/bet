<script>
import { fly } from 'svelte/transition'
import { quintIn } from 'svelte/easing'
let isToggle = false

function toggleMenu() {
	isToggle = !isToggle
}

</script>

<div class="c-c-c-c l1">
<div class="r-r-r-r l2">
	<div class="logoarea">
		<a href="/">
			<p>B<span class="isred">ṛ</span>hat Education</p>
		</a>
	</div>
	<div class="navarea">
		<nav>
			<a href="/about">about</a>
			<a href="/vision">vision</a>
			<a href="/events">events</a>
		</nav>
	</div>
<div class="navmobile">
	<div class="icon" on:click={toggleMenu} on:keydown={toggleMenu}>
		<img src="/images/hamburger-white.png" alt="icon" />
	</div>
	{#if isToggle}
	<div class="fs-menu"
		in:fly="{{duration: 200, y: -800, x:0, easing: quintIn}}"
		out:fly="{{duration: 300, y: -800, x: 0, easing: quintIn}}"
	>
		<div class="min-row" on:click={toggleMenu} on:keydown={toggleMenu}>
			<img src="/images/hamburger-close.png" alt="icon" />
		</div>
		<a href="/about" on:click={toggleMenu}>about</a>
		<a href="/vision" on:click={toggleMenu}>vision</a>
		<a href="/events" on:click={toggleMenu}>events</a>
	</div>
	{/if}
</div>
</div>
</div>

<style>
.l1 {
	transition: all 0.13s var(--cube1); 
	border: 1px solid transparent; 
	background: linear-gradient(90deg, rgba(6,9,7,0.7) 0%, rgba(39,39,39,0.9) 100%);
	width: 100vw; 
	z-index: 900; position: fixed; 
	top: 0; 
	left: 0; 
	align-items: center; 
	justify-content: flex-end;
	position: fixed;
}

.l2 {
	height: 100%;
	width: 100%;
	transition: all 0.13s var(--cube1);
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
	font-size: 40px;
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
	font-weight: 300;
	font-size: 1.12em;
	color: white;
	padding-left: 40px;
	text-transform: uppercase;

}


@media screen and (min-width: 768px) {

	.logoarea { 
		transform-origin: center left;
		transition: all 0.12s ease-out;
	}

	.logoarea:hover {
		transform: scale(0.95);
	}
.icon img, .min-row img {
		object-fit: contain;
		width: 24px;
		height: 24px;
	}
	.l1 { height: 80px; margin-bottom: -80px;}
	.l2 { padding-left: 40px; padding-right: 40px; justify-content: space-between; width: 100%; align-items: center;}
	.navarea a { margin-left: 20px;}
	.logoarea p {
		font-size: 32px;
	}
	.navmobile {
		display: none;
	}
	.navarea {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		text-align: right;
	}
	}

@media screen and (max-width: 767px) {
.icon img, .min-row img {
		object-fit: contain;
		width: 24px;
		height: 24px;
	}

	.l2 { padding-left: 16px; padding-right: 16px; justify-content: space-between; width: 100%; align-items: center;}
	.navarea { display: none;}
	.logoarea p {
		font-size: 24px;
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