// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB07pyJjo67UTN8za0n-eZUVeq3PV4ZtPY",
  authDomain: "netflix-react-12593.firebaseapp.com",
  projectId: "netflix-react-12593",
  storageBucket: "netflix-react-12593.appspot.com",
  messagingSenderId: "506070609627",
  appId: "1:506070609627:web:dc4808adc8961226b2a6fe",
  measurementId: "G-M82409892X",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
