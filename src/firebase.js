import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAU0KJUFyp-tVc9zfICYkHBIUp2yCZFZuk",
  authDomain: "clone-da051.firebaseapp.com",
  databaseURL: "https://clone-da051.firebaseio.com",
  projectId: "clone-da051",
  storageBucket: "clone-da051.appspot.com",
  messagingSenderId: "221476704996",
  appId: "1:221476704996:web:19cd8b426b6bfeebbcd2f1",
  measurementId: "G-RYHBP1C220",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
