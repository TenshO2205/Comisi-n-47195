import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCN1f07OjqjJ7fxtCHfvTrH7iP44Ss4M64",
  authDomain: "pulseras-eunoia.firebaseapp.com",
  projectId: "pulseras-eunoia",
  storageBucket: "pulseras-eunoia.appspot.com",
  messagingSenderId: "802059228108",
  appId: "1:802059228108:web:66e59cc7a96dd66aa90369"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)