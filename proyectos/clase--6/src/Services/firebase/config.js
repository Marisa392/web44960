
import { initializeApp } from "firebase/app";
import {getFirestore}from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyDMrWvKJHlEvMpG-LU-_1_U0LHLZVQ4kGk",
  authDomain: "mundo-digital-8dd69.firebaseapp.com",
  projectId: "mundo-digital-8dd69",
  storageBucket: "mundo-digital-8dd69.appspot.com",
  messagingSenderId: "850158852002",
  appId: "1:850158852002:web:499a090875fa37370404fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);