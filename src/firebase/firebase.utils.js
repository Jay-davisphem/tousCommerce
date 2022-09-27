import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBRoP4SbtMga1aN198qfPyLcZgt9PCJMEA",
  authDomain: "tous-commerce.firebaseapp.com",
  projectId: "tous-commerce",
  storageBucket: "tous-commerce.appspot.com",
  messagingSenderId: "939658041213",
  appId: "1:939658041213:web:4b17a8854f8d88e7319e14",
  measurementId: "G-HGTYFR7DS6",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("Agba Awo tin fase mumi", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
    console.log(newDocRef);
  });
  return await batch.commit();
};

export default firebase;
