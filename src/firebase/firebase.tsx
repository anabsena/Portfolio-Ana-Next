
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

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

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
