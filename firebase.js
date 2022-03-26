import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
   apiKey: process.env.FIREBASE_API,
   authDomain: "insta-clone-app-41f98.firebaseapp.com",
   projectId: "insta-clone-app-41f98",
   storageBucket: "insta-clone-app-41f98.appspot.com",
   messagingSenderId: "473262574046",
   appId: "1:473262574046:web:dff92af268ec0b8117754f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
