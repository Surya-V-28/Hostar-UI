import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

  apiKey: "AIzaSyAcxSbCgg-baC2cr9Fk9n4PkkvoyeSp1mk",
  authDomain: "disney-clone-3581f.firebaseapp.com",
  projectId: "disney-clone-3581f",
  storageBucket: "disney-clone-3581f.appspot.com",
  messagingSenderId: "40959991584",
  appId: "1:40959991584:web:26956820c80519d8a5c145",
  measurementId: "G-NTW2QW6MDZ"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)
// const app = firebaseApp.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage.ref();


export {auth,provider};
export default db;
