// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjbjY4g1orc23abc-oiz5fMKaauZLrqFI",
    authDomain: "ema-zon-shopping.firebaseapp.com",
    projectId: "ema-zon-shopping",
    storageBucket: "ema-zon-shopping.appspot.com",
    messagingSenderId: "151715301041",
    appId: "1:151715301041:web:7df79e513ab9e1f6a6c490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;