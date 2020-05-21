import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDxk7_XHWB0a5wUzfrdI0z79778FIVOKiw",
    authDomain: "crown-clothing-36ec3.firebaseapp.com",
    databaseURL: "https://crown-clothing-36ec3.firebaseio.com",
    projectId: "crown-clothing-36ec3",
    storageBucket: "crown-clothing-36ec3.appspot.com",
    messagingSenderId: "71620557705",
    appId: "1:71620557705:web:a788242a164d185b3e3f58",
    measurementId: "G-EVNZZ78RHW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select-account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;