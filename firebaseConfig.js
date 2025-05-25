import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBozhHZobzU0xVWekAcRzfHb5ObEKEHpyI",
  authDomain: "terramap-209ff.firebaseapp.com",
  projectId: "terramap-209ff",
  storageBucket: "terramap-209ff.appspot.com", 
  messagingSenderId: "320188358041",
  appId: "1:320188358041:web:185ea473805a5cd030c708",
  measurementId: "G-BMMZ27GVTS"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
