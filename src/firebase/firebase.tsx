// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeME60arjvdt2A31Z2RWDvR0wqnrbeAOQ",
  authDomain: "portfolio-ana-cc62d.firebaseapp.com",
  projectId: "portfolio-ana-cc62d",
  storageBucket: "portfolio-ana-cc62d.firebasestorage.app",
  messagingSenderId: "457342924186",
  appId: "1:457342924186:web:ec5182e1c872da3c097623",
  measurementId: "G-2SC0VJ880S"
};

const app = initializeApp(firebaseConfig);
export {app}