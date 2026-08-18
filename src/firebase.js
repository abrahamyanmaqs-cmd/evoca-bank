import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt9_OFOs9cgg3vfy1ZhZdOv0-WAYVN-F4",
  authDomain: "evoca-d3b88.firebaseapp.com",
  projectId: "evoca-d3b88",
  storageBucket: "evoca-d3b88.firebasestorage.app",
  messagingSenderId: "943517092690",
  appId: "1:943517092690:web:25c8c959df97a1f045c88b",
  measurementId: "G-ZPMHMQK927"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();