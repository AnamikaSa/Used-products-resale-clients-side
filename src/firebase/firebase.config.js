// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:"AIzaSyBCNrDrKGrZNTuDW8QcekTA_ldFuaWaexM",
  authDomain:"products-resale-anamikasa.firebaseapp.com",
  projectId:"products-resale-anamikasa",
  storageBucket:"products-resale-anamikasa.appspot.com",
  messagingSenderId:"317831965825",
  appId:"1:317831965825:web:1868d646db24a9b8567180",
  measurementId:"G-895LZ7GXTB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;