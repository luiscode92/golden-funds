import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import "firebase/compat/database";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    setDoc,
    updateDoc,
    doc,
    addDoc,
  } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-Wx_tx2jQcDn-budFulL2JvV5fBLEHMc",
    authDomain: "golden-funds.firebaseapp.com",
    projectId: "golden-funds",
    storageBucket: "golden-funds.appspot.com",
    messagingSenderId: "157750851958",
    appId: "1:157750851958:web:4675fd5cc947b723bba257",
    measurementId: "G-PSMCB0WF8K"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const addData = async (id, link, email) => {
    const colllectionRef = collection(db, "users");
    const q = query(colllectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) => {
            const docRef = doc(db, "users", docu.id)
            updateDoc(docRef, {accountId: id, accountLink: link})
            console.log(docu.id, " => ", docu.data());
        });
}

export {
    addData
}
