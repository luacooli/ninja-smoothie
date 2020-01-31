import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAuLs2OTBwbPe82zCaXQsRShJUMUYw7XUo",
    authDomain: "udemy-ninja-smoothies-174b8.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-174b8.firebaseio.com",
    projectId: "udemy-ninja-smoothies-174b8",
    storageBucket: "udemy-ninja-smoothies-174b8.appspot.com",
    messagingSenderId: "1031612369464",
    appId: "1:1031612369464:web:5deef910269e6a9c6d74cd",
    measurementId: "G-ST4X9S8DYY"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()