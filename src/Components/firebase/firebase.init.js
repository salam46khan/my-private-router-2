// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAheD_lJIUJUsUy8iBMV_5_XFutbDnAa4",
  authDomain: "my-private-router.firebaseapp.com",
  projectId: "my-private-router",
  storageBucket: "my-private-router.appspot.com",
  messagingSenderId: "1003001698603",
  appId: "1:1003001698603:web:3e57493671a6d0a5e0cd6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;