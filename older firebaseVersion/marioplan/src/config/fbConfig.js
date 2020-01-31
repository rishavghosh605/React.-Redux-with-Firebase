import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDjGoAFl1l55ynAizpnp3NZR2bSiWYIJgg",
    authDomain: "reactwithfirebase-4997d.firebaseapp.com",
    databaseURL: "https://reactwithfirebase-4997d.firebaseio.com",
    projectId: "reactwithfirebase-4997d",
    storageBucket: "reactwithfirebase-4997d.appspot.com",
    messagingSenderId: "588544753155",
    appId: "1:588544753155:web:4e07358f6bddcf4131d836",
    measurementId: "G-VCQN00020P"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);
  //firebase.analytics();

  export default firebase;