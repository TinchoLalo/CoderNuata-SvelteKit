<script>

    import welcome from '$lib/images/svelte-welcome.png';
    import welcomepx from '$lib/images/svelte-welcome.webp';

</script>


<section>
    <br>
    <picture>
        <source srcset={welcomepx} type="image/webp" />
        <img src={welcome} alt="Welcome" />
    </picture>
    <h3>Here you will be able to test your components and walk through the code.</h3>


</section>


<style>

    section {
        margin: auto;
        text-align: center;
    }
    picture {
        height: auto;
    }
    img,source {
        width: 100%;
        height: auto;
        margin: auto;
        text-align: center;
        padding: 2rem 0 calc(100% * 600 / 2048) 0;
    }
    h3 {
        margin-top: -5rem;
    }
</style>