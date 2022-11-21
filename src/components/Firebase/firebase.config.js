// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpvW3D8LB6IAatL3meJWdk1u4m_ye5wIs",
    authDomain: "mr-learning.firebaseapp.com",
    projectId: "mr-learning",
    storageBucket: "mr-learning.appspot.com",
    messagingSenderId: "1094935461293",
    appId: "1:1094935461293:web:6a6ed875db6ef38580b524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;