// DANGER: Never Share it publically
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNM66ezoTBL_Bn_4PL8jsJ6oVfghBBnEo",
  authDomain: "email-password-auth-be964.firebaseapp.com",
  projectId: "email-password-auth-be964",
  storageBucket: "email-password-auth-be964.firebasestorage.app",
  messagingSenderId: "435587890589",
  appId: "1:435587890589:web:2777fcb54fd4087669c374",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Countinue With Google

export const provider = new GoogleAuthProvider();
