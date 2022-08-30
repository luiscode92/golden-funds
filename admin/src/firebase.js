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
const firestore = getFirestore(app);

const updateDocEmailSent = async (email) => {
    const colllectionRef = collection(firestore, "users");
    const q = query(colllectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docu) => {
            const docRef = doc(firestore, "users", docu.id)
            updateDoc(docRef, {emailSent: true})
            console.log(docu.id, " => ", docu.data());
        });
}

/*const createNewUser = async (name, email, password, address, phone, accountId, emailSent) => {
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
        password,
        emailSent
      });
      return {
        user: user,
        isNewUser: true
      }
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          console.log(`Email address ${email} already in use.`);
          return {
            user: email,
            isNewUser: true
          };
        default:
          console.log(err.message);
          break;
      }
    }
  };
*/
  const checkEmail = async (email) => {
    getAuth()
      .getUserByEmail(email)
      .then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
  }

export {
 updateDocEmailSent,
  firestore,
  checkEmail,
 // createNewUser,
  auth,
  collection,
}
