import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt9_OF0s9ccg3vfy1ZhZDv0-WAYVN-F4",
  authDomain: "evoca-d3b88.firebaseapp.com",
  projectId: "evoca-d3b88",
  storageBucket: "evoca-d3b88.appfirebasestorage.app",
  messagingSenderId: "943517092690",
  appId: "1:943517092690:web:25c8c959df97a1f045c88b",
  measurementId: "G-ZPMHMQK927"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);