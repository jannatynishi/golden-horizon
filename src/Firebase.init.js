// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDvIdmKtTQx6p_9JPoBUcZIUe69xzn0-k",
  authDomain: "golden-horizon-e1e0a.firebaseapp.com",
  projectId: "golden-horizon-e1e0a",
  storageBucket: "golden-horizon-e1e0a.appspot.com",
  messagingSenderId: "855511844568",
  appId: "1:855511844568:web:83da03114c6788ffed39ad",
  measurementId: "G-7TB0MBDTRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;