import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWSoT1KofqwRcs68-LmaCGspKWcOyeXJw",
  authDomain: "restaurantapp-3a941.firebaseapp.com",
  databaseURL: "https://restaurantapp-3a941-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-3a941",
  storageBucket: "restaurantapp-3a941.appspot.com",
  messagingSenderId: "91571830887",
  appId: "1:91571830887:web:e85128072f27957b8a54c2",
  measurementId: "G-G418YPJH96",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)


export {app, firestore, storage}