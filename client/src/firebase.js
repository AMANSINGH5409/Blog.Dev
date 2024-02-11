// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-dev-2b07e.firebaseapp.com",
  projectId: "blog-dev-2b07e",
  storageBucket: "blog-dev-2b07e.appspot.com",
  messagingSenderId: "386163064909",
  appId: "1:386163064909:web:dc1fe0be360c5da8c9dc04",
  measurementId: "G-QHTZNXMDG8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
