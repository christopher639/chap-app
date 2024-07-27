// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_tuiA-AA3GeYDkJuLjXQnmPlweJwcvIQ",
  authDomain: "chat-a4a47.firebaseapp.com",
  projectId: "chat-a4a47",
  storageBucket: "chat-a4a47.appspot.com",
  messagingSenderId: "392525846484",
  appId: "1:392525846484:web:a568f118e6cc1619302841",
  measurementId: "G-RLH12S9067"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db =getFirestore();





