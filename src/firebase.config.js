import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPTdc3Eni6XP7V1WNzWkQSPpPRYAs1omM",
  authDomain: "free-cvbuilder.firebaseapp.com",
  projectId: "free-cvbuilder",
  storageBucket: "free-cvbuilder.appspot.com",
  messagingSenderId: "348708916035",
  appId: "1:348708916035:web:dd145f0a800622d3ee7df6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db