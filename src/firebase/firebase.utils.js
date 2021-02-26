import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "kasuwa-6d6c1.firebaseapp.com",
  databaseURL: "https://kasuwa-6d6c1.firebaseio.com",
  projectId: "kasuwa-6d6c1",
  storageBucket: "kasuwa-6d6c1.appspot.com",
  messagingSenderId: "92625455786",
  appId: "1:92625455786:web:fb8ada5ce28c7a92701ed3",
  measurementId: "G-4R3JS0ZZ5W"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, phoneNumber } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        phoneNumber,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user ', err.message);
    }
  }
  return userRef;
}

export const createBusinessProfileDocument = async (id, businessProfile) => {
  if (!businessProfile) return;
  const businessRef = firestore.collection(`users/${id}/business`);
  const snapShot = await businessRef.get();
  if (!snapShot.docs.length) {
    try {
      await businessRef.add({
        ...businessProfile
      });
    } catch (err) {
      console.error(err);
    }
  }
  return businessRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithFacebook = () => {
  firebase.auth().signInWithRedirect(facebookProvider);
};

export default firebase;