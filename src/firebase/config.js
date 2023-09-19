import { initializeApp } from "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjUQ6ju__Ef6pgpM8CI82A3fux9M3S0bI",
  authDomain: "empresa-dental-house.firebaseapp.com",
  databaseURL: "https://empresa-dental-house-default-rtdb.firebaseio.com",
  projectId: "empresa-dental-house",
  storageBucket: "empresa-dental-house.appspot.com",
  messagingSenderId: "41756140586",
  appId: "1:41756140586:web:5eb09d1a1c4b23060a8f53"
};

export const app = initializeApp(firebaseConfig);
