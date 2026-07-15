import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "obomocarev1.firebaseapp.com",
  projectId: "obomocarev1",
  storageBucket: "obomocarev1.appspot.com",
  messagingSenderId: "71202573897",
  appId: "1:71202573897:web:280ec4d2c480df373a7e43",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export { app };
