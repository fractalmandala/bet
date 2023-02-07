<script>
let isToggle = false

function toggleMenu() {
	isToggle = !isToggle
}

</script>

<div class="headerbox">
<div class="header">
	<div class="logoarea">
		<a href="/">
			<p>Bṛhat Education</p>
		</a>
	</div>
	<div class="navarea">
		<nav>
			<a href="/docs/introduction">about</a>
			<a href="/docs/brhataspartner">our work</a>
			<a href="/articles">articles</a>
			<a href="/videos">videos</a>
		</nav>
	</div>
	<div class="navmobile">
		<div class="icon" on:click={toggleMenu} on:keydown={toggleMenu}>
			<img src="/images/hamburger-black.png" alt="icon" />
		</div>
		{#if isToggle}
		<div class="fs-menu" on:click={toggleMenu} on:keydown={toggleMenu}>
			<div class="min-row" on:click={toggleMenu} on:keydown={toggleMenu}>
				<img src="/images/hamburger-close.png" alt="icon" />
			</div>
			<a href="/docs/introduction">about</a>
			<a href="/docs/brhataspartner">our work</a>
			<a href="/articles">articles</a>
			<a href="/videos">videos</a>
		</div>
		{/if}
	</div>
</div>
</div>

<style>
.logoarea p {
	margin-bottom: 0;
	margin-top: 0;
	text-transform: uppercase;
	font-weight: bold;
	color: white;
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
	color: white;
	font-size: 20px;
	text-transform: capitalize;
}

.navarea a {
	font-weight: 400;
	font-size: 1.44em;
	color: white;
}

@media screen and (min-width: 768px) {
	.logoarea p {
		font-size: 24px;
	}
	.navmobile {
		display: none;
	}
	}

@media screen and (max-width: 767px) {
	.logoarea p {
		font-size: 20px;
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