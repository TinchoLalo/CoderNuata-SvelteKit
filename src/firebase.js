// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore,doc, updateDoc, increment ,getDoc, setDoc, onSnapshot,collection} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth , onAuthStateChanged,signInAnonymously} from "firebase/auth";




//  FIREBASE CONFIG  //
//===============================================//
const firebaseConfig = {
    apiKey: "AIzaSyDeAzS_atcW7UxgNhei8P9hqzARhfX9lss",
    authDomain: "sveltekit-codernauta.firebaseapp.com",
    projectId: "sveltekit-codernauta",
    storageBucket: "sveltekit-codernauta.appspot.com",
    messagingSenderId: "411893798398",
    appId: "1:411893798398:web:27c7c24694b128b36bdcaf",
    measurementId: "G-R9BJPW2W0P"
};
//===============================================//


// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// AUTENTICACION
export const auth = getAuth(app);


// Obtener la fecha actual
let meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let fetch = meses[month]+'-'+year;

// CHECK SING
onAuthStateChanged(auth, (user) => {
  // check if is login
  if (user) {
    const uid = user.uid;
    console.log('Ya se encuentra logueado')
  }
  else {
    // Anonimus login
    signInAnonymously(auth)
      .then(() => {
      getCantidad();
    });
  }
});

// VIEW
const getCantidad = async()=> {
  const docSnap = await getDoc(doc(db,'visitas', fetch));
  if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
  } else {
      // doc.data() will be undefined in this case
      await setDoc(doc(db, 'visitas', fetch), {
        title: 0,
      });
  }
  setCantidad();
}

// plus view
const setCantidad = async()=> {
  await updateDoc(doc(db,'visitas', fetch), {
    title: increment(1)
  });
}

