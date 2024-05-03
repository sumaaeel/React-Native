// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3fpOfcXwMgNAVZTT6z6nf_npuX9pM8-M",
  authDomain: "e-store-5055c.firebaseapp.com",
  projectId: "e-store-5055c",
  storageBucket: "e-store-5055c.appspot.com",
  messagingSenderId: "499145213412",
  appId: "1:499145213412:web:2e1bae98de7aeb85fe33f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth=  getAuth(app);