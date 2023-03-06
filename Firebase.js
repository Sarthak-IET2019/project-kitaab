// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXCg2XtFELUGqkEwWcB_eoHD2LGwJhih4",
  authDomain: "hack-a-thon-1ecc0.firebaseapp.com",
  projectId: "hack-a-thon-1ecc0",
  storageBucket: "hack-a-thon-1ecc0.appspot.com",
  messagingSenderId: "176794108728",
  appId: "1:176794108728:web:27e2fc2dd5a2c6049d37cd",
  measurementId: "G-V04DNVJLKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DB setup
export const db = getFirestore(app);
//  db.settings({ timestampsInSnapshots: true });

export const auth = getAuth(app);
