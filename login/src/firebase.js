import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD2ZTzYKWAJVZqdHdX3IxaTv7p4YF5kDMM",
    authDomain: "react-project-3988c.firebaseapp.com",
    projectId: "react-project-3988c",
    storageBucket: "react-project-3988c.appspot.com",
    messagingSenderId: "386047649769",
    appId: "1:386047649769:web:a3cfc443372db5bd330d78",
    measurementId: "G-EKW40EX05T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;