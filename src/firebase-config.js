// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsUlWFXrnyJhfwgem5Qa1b4o6zA9TV0BE",
  authDomain: "food-ordering-15092.firebaseapp.com",
  projectId: "food-ordering-15092",
  storageBucket: "food-ordering-15092.appspot.com",
  messagingSenderId: "572280620920",
  appId: "1:572280620920:web:16f1b8970fbd353da12a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)