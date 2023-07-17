// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_8CFqecTXo7oC1MPYEn5V2QABFQaXlEU",
  authDomain: "social-media-98317.firebaseapp.com",
  projectId: "social-media-98317",
  storageBucket: "social-media-98317.appspot.com",
  messagingSenderId: "740974782577",
  appId: "1:740974782577:web:0091be764eb7d168ec93d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);