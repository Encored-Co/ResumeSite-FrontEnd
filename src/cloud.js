import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCjyLUSxSOROikcsmM2WTMLoeFHEuq4pZQ",
  authDomain: "main-site-5de8f.firebaseapp.com",
  projectId: "main-site-5de8f",
  storageBucket: "main-site-5de8f.appspot.com",
  messagingSenderId: "726506185333",
  appId: "1:726506185333:web:680d96f33f0d0fca86ce3c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);