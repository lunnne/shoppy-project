// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: 'shoppy-445d7.firebaseapp.com',
  databaseURL: 'https://shoppy-445d7-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'shoppy-445d7',
  storageBucket: 'shoppy-445d7.appspot.com',
  messagingSenderId: '9382336784',
  appId: '1:9382336784:web:ea61ef527abc3f9bf86d95',
  measurementId: 'G-JZE2K0JPZ1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
