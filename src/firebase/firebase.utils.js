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