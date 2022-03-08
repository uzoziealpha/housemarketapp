// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjDTr-ysucvIAlkAQkW3asJnz2IH9vQ0c",
  authDomain: "house-market-listing.firebaseapp.com",
  projectId: "house-market-listing",
  storageBucket: "house-market-listing.appspot.com",
  messagingSenderId: "766581826479",
  appId: "1:766581826479:web:1f3d95e08bf6d1bcab055a",
  measurementId: "G-2C4QRHH9YL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()