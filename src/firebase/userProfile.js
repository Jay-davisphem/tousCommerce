import { firestore } from "./firebase.utils";

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await docRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user", error.message);
    }
  } else {
    console.info("There is a user with that name.");
  }
  return docRef;
};
