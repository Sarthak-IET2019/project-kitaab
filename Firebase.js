// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
// apiKey: "AIzaSyAXCg2XtFELUGqkEwWcB_eoHD2LGwJhih4",
//authDomain: "hack-a-thon-1ecc0.firebaseapp.com",
//projectId: "hack-a-thon-1ecc0",
//storageBucket: "hack-a-thon-1ecc0.appspot.com",
//messagingSenderId: "176794108728",
//appId: "1:176794108728:web:27e2fc2dd5a2c6049d37cd",
//measurementId: "G-V04DNVJLKL"
//};

//Accessing values fromdotrnv file
const apiKey = process.env.API_KEY;
const authDomain = process.env.AUTH_DOMAIN;
const projectId = process.env.PROJECT_ID;
const storageBucket = process.env.STORAGE_BUCKET;
const messagingSenderId = process.env.MESSAGEING_SENDERID;
const appId = process.env.APP_ID;
const measurementId = process.env.MEASUREMENT_ID;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
