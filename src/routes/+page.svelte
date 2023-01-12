<script>
	import Counter from '../components/Counter.svelte';
	import welcome from '$lib/images/combi.svg';
	import imageJs from '$lib/images/js.svg';
	import imageSvelte from '$lib/images/svelte.svg';

	
</script>

<svelte:head>
	<title>CoderNauta SvelteKit</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome} alt="Welcome" />
			</picture>
		</span>

		CODERNAUTA<br />SvelteKit app
	</h1>

	<h2>
		Travel through <strong>the code!</strong>
	</h2>


	<div id="images">
		<div class="left">
			<img src={imageSvelte} alt="Welcome" />
		</div>
	
		<div class="right">
		  <br>
		  <img src={imageJs} alt="Welcome" />
		</div>
	</div>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
	h2 {
		margin: 0;
	}


	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 600 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}


	#images {
		display: inline-flex;
		position: absolute;
		margin-top: 1%;
	
	}
	
	.left img{
		position: fixed;
		width: 4.5rem;
		margin-left: -40%;
	}
	.right img{
		position: fixed;
		width: 8rem;
		margin-left: 30%;
	}

	@media screen and (max-width: 900px) {
		#images {display: none;}

	}
</style>
