<script>
import { fly } from 'svelte/transition'
import { quintIn } from 'svelte/easing'
let isToggle = false

function toggleMenu() {
	isToggle = !isToggle
}

</script>

<div class="headerbox">
<div class="header">
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
.logoarea p {
	margin-bottom: 0;
	margin-top: 0;
	text-transform: capitalize;
	font-weight: 700;
	color: white;
	font-size: 40px;
	font-family: 'Source Serif Pro',serif;
}

.min-row {
	display: flex;
	flex-direction: column;
	align-items: flex-end;
}

.icon img, .min-row img {
		object-fit: contain;
		width: 24px;
		height: 24px;
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
	font-size: 1.4em;
	color: white;
	padding-left: 32px;	
	padding-right: 32px;
}

.navarea a:hover {
	padding-left: 32px; padding-right: 32px; justify-content: space-between; width: 100%; align-items: center;
}


@media screen and (min-width: 768px) {
	.logoarea p {
		font-size: 32px;
	}
	.navmobile {
		display: none;
	}
	}

@media screen and (max-width: 767px) {
	.logoarea p {
		font-size: 32px;
	}
		.navarea {
			display: none;
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