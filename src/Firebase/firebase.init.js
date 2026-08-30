// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRUv-jnp4ui88xzwPGFaaSFsKbKJS24SA",
  authDomain: "react-auth-sustem.firebaseapp.com",
  projectId: "react-auth-sustem",
  storageBucket: "react-auth-sustem.firebasestorage.app",
  messagingSenderId: "894792532704",
  appId: "1:894792532704:web:a2ae5d5b7550bfbc5f4685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);