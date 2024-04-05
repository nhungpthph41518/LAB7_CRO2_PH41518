// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getDatabase} from 'firebase/database';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXapyVFb6iXmu6qmnh_kW3q5bvVzzIg9Y",
  authDomain: "mob403-su23-b2-3.firebaseapp.com",
  projectId: "mob403-su23-b2-3",
  storageBucket: "mob403-su23-b2-3.appspot.com",
  messagingSenderId: "31739220617",
  appId: "1:31739220617:web:88b3d0cdf31eb5c032ac58",
  measurementId: "G-BBEJJ81BVZ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP);
export const FIRESTORE_DB= getFirestore(FIREBASE_APP);
export const DATABASE = getDatabase(FIREBASE_APP);
export const STORAGE = getStorage(FIREBASE_APP);
const analytics = getAnalytics(app);