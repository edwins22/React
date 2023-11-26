import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAr3FCB3wBRvOZt1uvns5uAyNbEkjfrIjE",
  authDomain: "react-2507f.firebaseapp.com",
  projectId: "react-2507f",
  storageBucket: "react-2507f.appspot.com",
  messagingSenderId: "593573751333",
  appId: "1:593573751333:web:8d3423c1a9df371fbf6dcc",
  measurementId: "G-55SPL1H0FQ"
};
  

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();