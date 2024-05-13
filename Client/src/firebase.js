// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3e0a0.firebaseapp.com",
  projectId: "mern-estate-3e0a0",
  storageBucket: "mern-estate-3e0a0.appspot.com",
  messagingSenderId: "266248569891",
  appId: "1:266248569891:web:80c66f743d9360c740dd96"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);