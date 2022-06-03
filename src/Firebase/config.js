import  firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAPmBZ1EDgd8R3recm3hYxIiQ2woWM2wc4",
  authDomain: "olx-clone-7a770.firebaseapp.com",
  projectId: "olx-clone-7a770",
  storageBucket: "olx-clone-7a770.appspot.com",
  messagingSenderId: "409554616070",
  appId: "1:409554616070:web:7141894b1a2237264ea887",
  measurementId: "G-055HGQ2W9X"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);