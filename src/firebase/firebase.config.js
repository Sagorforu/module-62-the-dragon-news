// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDF9MWvCJPUrBym9N-dVUgf_-XRqkuXaas",
  authDomain: "the-dragon-news-f0e1a.firebaseapp.com",
  projectId: "the-dragon-news-f0e1a",
  storageBucket: "the-dragon-news-f0e1a.appspot.com",
  messagingSenderId: "931364281780",
  appId: "1:931364281780:web:97825e5f2da96e1967e6e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;