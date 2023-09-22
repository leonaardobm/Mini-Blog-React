// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8uDmPvTRrc0d-FAN3okwqN8dmF7r46GM",
  authDomain: "miniblog-d5e4b.firebaseapp.com",
  projectId: "miniblog-d5e4b",
  storageBucket: "miniblog-d5e4b.appspot.com",
  messagingSenderId: "752136712024",
  appId: "1:752136712024:web:c3a12f42f675c4b41e7f2d",
  measurementId: "G-9V6020EKBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);