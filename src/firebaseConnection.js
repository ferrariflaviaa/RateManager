import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzPplVqBOzFoSq0Zcqgs6TzFa-w6KMfSk",
  authDomain: "curso-d53ef.firebaseapp.com",
  projectId: "curso-d53ef",
  storageBucket: "curso-d53ef.appspot.com",
  messagingSenderId: "951915767588",
  appId: "1:951915767588:web:b7acaccc92e329b41735b1",
  measurementId: "G-LHD8Y4NZ7S"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;