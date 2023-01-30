import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBSa9LTWmLS1uli-yLjHDCoJX1I_wXCYvs",
    authDomain: "social-media-50c9c.firebaseapp.com",
    projectId: "social-media-50c9c",
    storageBucket: "social-media-50c9c.appspot.com",
    messagingSenderId: "958068567826",
    appId: "1:958068567826:web:a5c34696ffe63f21e70dcb",
    measurementId: "G-4603D1VQN7"
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {auth, provider}
export default db