// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2lGx0XH2LDkjBtHAPrc7nVDr_Ufbnr0E",
  authDomain: "turkishdramas-5e078.firebaseapp.com",
  projectId: "turkishdramas-5e078",
  storageBucket: "turkishdramas-5e078.appspot.com",
  messagingSenderId: "948734379701",
  appId: "1:948734379701:web:18379b15a76ae1f42760fc",
  measurementId: "G-7J5YV18K54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const dramasRef = collection(db, 'dramas');

export const reviewsRef=collection(db,"reviews");
export const usersRef=collection(db,"users");


export default app;