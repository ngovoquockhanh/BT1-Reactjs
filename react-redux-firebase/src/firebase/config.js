import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBd112uhPT8jVMqRZG7SfMAzXN1LzCJqqI",
  authDomain: "react-redux-firebase-a5b92.firebaseapp.com",
  projectId: "react-redux-firebase-a5b92",
  storageBucket: "react-redux-firebase-a5b92.appspot.com",
  messagingSenderId: "976267863144",
  appId: "1:976267863144:web:2c2555613a41a61d30c7dd",
  measurementId: "G-BKGWQY8V8J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
