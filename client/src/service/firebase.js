import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyC-Wx_tx2jQcDn-budFulL2JvV5fBLEHMc",
    authDomain: "golden-funds.firebaseapp.com",
    projectId: "golden-funds",
    storageBucket: "golden-funds.appspot.com",
    messagingSenderId: "157750851958",
    appId: "1:157750851958:web:4675fd5cc947b723bba257",
    measurementId: "G-PSMCB0WF8K"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;