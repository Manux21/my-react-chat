// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrZBVW9qJl4pf2AMaENUG0hgqnjQVnFVs",
  authDomain: "first-react-chat.firebaseapp.com",
  projectId: "first-react-chat",
  storageBucket: "first-react-chat.appspot.com",
  messagingSenderId: "909539183748",
  appId: "1:909539183748:web:8d481a1545369571c246d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()