import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQ1JVeGLNbmWHaGBg8jkMQDk5k2FCEnrI",
  authDomain: "loginsignup-7cdc0.firebaseapp.com",
  projectId: "loginsignup-7cdc0",
  storageBucket: "loginsignup-7cdc0.appspot.com",
  messagingSenderId: "399319614267",
  appId: "1:399319614267:web:0ac66000a81ace16666d1e",
  measurementId: "G-6DGSSW70NC",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const userCollectionRef = collection(db, "users");

export const auth = getAuth(firebaseApp);
export { db, userCollectionRef };
