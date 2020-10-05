import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAsNKpL63hxCoNTu1NKfc21kW5TIMD-VZ4",
    authDomain: "challenge-e20ce.firebaseapp.com",
    databaseURL: "https://challenge-e20ce.firebaseio.com",
    projectId: "challenge-e20ce",
    storageBucket: "challenge-e20ce.appspot.com",
    messagingSenderId: "1031814264928",
    appId: "1:1031814264928:web:5f4b539132cd4f2753eb05",
    measurementId: "G-7XQYQSPMJX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};