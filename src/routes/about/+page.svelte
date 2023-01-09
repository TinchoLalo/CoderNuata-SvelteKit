<script>

	  // FIREBASE
    import {onSnapshot, collection, doc, getDoc,setDoc, increment, updateDoc} from "firebase/firestore";
    import {db} from "../../firebase";

    import { onMount } from "svelte";

    

	  // FUNCIONES
    let id = 0;
    let text = '';

    // get document from firebase
    
      const docRef = doc(db, 'about', '0npBzWWjzmVzmEcJuJuQ')
      getDoc(docRef)
      .then((doc) => {
        text = doc.data().text;
          
      })
  


    // check opinion
    const checkStar = (start) => {
      console.log(start);
      if (localStorage.getItem('star') != 'true'){
        localStorage.setItem('star', 'true');
        setStart(start);
      }
      else{
        let error = 'Sorry, you already gave us your opinion!';
        alert(error);
      }
    }
    // save firebase data 
    const setStart = async(start)=> {
      await updateDoc(doc(db,'about', `star${start}`), {
        cantidad: increment(1)
		  });
     
  	}

</script>

<svelte:head>
	<title>CoderNauta SvelteKit | About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<main>

<p>
	{text}
</p>
<br>
<br><br><br><br><br><br>
<i class="fa-solid fa-heart"><span> Give your opinion too</span></i>
<br><br>
<div id="given">
	<i class="fa-solid fa-face-frown" on:mousedown={() => checkStar(1)} ></i>
	<i class="fa-solid fa-face-meh" on:mousedown={() => checkStar(2)} ></i>
	<i class="fa-solid fa-face-smile" on:mousedown={() => checkStar(3)} ></i>
	<i class="fa-solid fa-face-laugh" on:mousedown={() => checkStar(4)} ></i>
	<i class="fa-solid fa-face-laugh-squint" on:mousedown={() => checkStar(5)} ></i>
</div> 



</main>


<style>
  main {
    margin: auto;
    text-align: center;
  }
  p{
    font-size: 1.4rem;
    margin: -5rem auto 0 auto;
    text-align: justify;
    width: 80%;
  }
  i{
    font-size: 1.3rem;
  }
  span {
    margin-left: .5rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  #given i {
    margin: .5rem;
    font-size: 3rem;
    color: #ffc936;
    cursor: pointer;
    transition: .5s;
  }
  #given i:hover {
    color: #ffa836;
    transform: scale(1.1);
    transition: .5s;
  }

  @media screen and (max-width:900px){
    main {
      margin-top: 10rem;
    }
    #given i {
      margin: .2rem;
      font-size: 2.5rem;
      color: #ffc936;
      cursor: pointer;
      transition: .5s;
    }
    
  }
</style>