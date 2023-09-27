import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB8uDmPvTRrc0d-FAN3okwqN8dmF7r46GM",
  authDomain: "miniblog-d5e4b.firebaseapp.com",
  projectId: "miniblog-d5e4b",
  storageBucket: "miniblog-d5e4b.appspot.com",
  messagingSenderId: "752136712024",
  appId: "1:752136712024:web:c3a12f42f675c4b41e7f2d",
  measurementId: "G-9V6020EKBN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db}