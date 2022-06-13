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
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const addData = async (id, email) => {
    const colllectionRef = collection(db, "users");
    const q = query(colllectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) => {
            const docRef = doc(db, "users", docu.id)
            updateDoc(docRef, {accountId: id})
            console.log(docu.id, " => ", docu.data());
        });
}

const registerWithEmailAndPassword = async (name, email, password, address, phone, accountId) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        address, 
        phone,
        accountId,
        password
      });
      return user
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

export {
    addData,
    registerWithEmailAndPassword,
}
