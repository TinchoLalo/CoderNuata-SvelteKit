<script>
    import welcome from '$lib/images/airplane.svg';
    export let data;
</script>

<svelte:head>
	<title>CoderNauta SvelteKit | My Number</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<br><br>
<h1>
    <span class="welcome">
        <picture>
            <source srcset={welcome} type="image/webp" />
            <img src={welcome} alt="Welcome" />
        </picture>
    </span>

    Your number is <br/> <br/>
    <b>{data.slug}</b>
</h1>



<style>

    h1 {
		width: 100%;
	}
    h1 b {
        color: rgb(231, 54, 18);
        font-size: 4rem;
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


</style>