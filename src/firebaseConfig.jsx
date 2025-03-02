// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Import authentication

const firebaseConfig = {
  apiKey: "AIzaSyCs8bSR8ety5dU0n-CbqkAGOYZV8iUF1d0",
  authDomain: "chat-app-14d48.firebaseapp.com",
  projectId: "chat-app-14d48",
  storageBucket: "chat-app-14d48.appspot.com", // ❌ Fix storageBucket typo
  messagingSenderId: "740948952562",
  appId: "1:740948952562:web:948c441538356fb836176b",
  measurementId: "G-TVNJ28EBJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Export authentication