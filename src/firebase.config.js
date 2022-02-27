// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2WNn4QzySRtl0d56snk8hq-UOooOceX8",
  authDomain: "house-marketplace-projec-d8b5f.firebaseapp.com",
  projectId: "house-marketplace-projec-d8b5f",
  storageBucket: "house-marketplace-projec-d8b5f.appspot.com",
  messagingSenderId: "1094747201329",
  appId: "1:1094747201329:web:eebf904cb88a118d951a10"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();