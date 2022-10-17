// import { createApp } from 'vue'
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import './index.css'
// import axios from "axios"
// import firebase from "firebase/app"
// // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";

// // Vue.prototype.$axios = axios;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAzGC1a1CvhUkyDiVEokGBQ8z0updergAg",
//   authDomain: "vue-trial-f18eb.firebaseapp.com",
//   projectId: "vue-trial-f18eb",
//   storageBucket: "vue-trial-f18eb.appspot.com",
//   messagingSenderId: "383869109854",
//   appId: "1:383869109854:web:59c06011da4b5d042296cf"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// console.log(app)
// createApp(App).use(router).mount('#app')

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import './index.css'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import "firebase/storage";
import "firebase/firestore"

import { firebaseConfig } from './firebase-config.js'
 firebase.initializeApp(firebaseConfig)
 export const db = firebase.firestore(); 

// export const db  = firebase.firestore();
// export const db = null
// try{
//     db = firebase.firestore();
// }catch(e){
//     console.log(e)
// }


// try{
//  db.collection ('Contacts').get().then(r => {
//     r.docs.map(doc => {
//     console. log (doc.data());
//     });
// });}
// catch(e)
// {

// }






createApp(App).use(router).mount('#app')