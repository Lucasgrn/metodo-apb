import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCx0K3sGxn0M9PseOM3QAuwDK84Ro1C61c",
    authDomain: "metodo-apb.firebaseapp.com",
    projectId: "metodo-apb",
    storageBucket: "metodo-apb.appspot.com",
    messagingSenderId: "578008982170",
    appId: "1:578008982170:web:784bfafbe9f5ec26187523",
    measurementId: "G-VG2DB1WPY4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
