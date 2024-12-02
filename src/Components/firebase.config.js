// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBZTkYjGB2cuTVA9TqLbbP4VhrOsuCtY",
  authDomain: "coffee-store-ad9fa.firebaseapp.com",
  projectId: "coffee-store-ad9fa",
  storageBucket: "coffee-store-ad9fa.firebasestorage.app",
  messagingSenderId: "55426587718",
  appId: "1:55426587718:web:c7adffe8cc2c3b9da77e47"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);