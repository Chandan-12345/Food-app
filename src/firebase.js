// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from './firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-QOSYYdUSdi0KDiBxiOMBcrMrmP0G5bM",
  authDomain: "chromato-3a77b.firebaseapp.com",
  projectId: "chromato-3a77b",
  storageBucket: "chromato-3a77b.appspot.com",
  messagingSenderId: "244813576276",
  appId: "1:244813576276:web:1d390c772fd6999fc795c1",
  measurementId: "G-KFC4M8B4B8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


// export const db=firebase.firestore();
export default app;