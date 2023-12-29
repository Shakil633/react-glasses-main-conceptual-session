// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlZA3gIlRMB4TILFxOzMcwfEaHRt9UILI",
  authDomain: "react-firebase-auth-55e26.firebaseapp.com",
  projectId: "react-firebase-auth-55e26",
  storageBucket: "react-firebase-auth-55e26.appspot.com",
  messagingSenderId: "70357630148",
  appId: "1:70357630148:web:05603c0b23295ef3899d91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
