import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAOStnpQsJLYUDLY-ZZZxi_3ULN5vUFDQA",
    authDomain: "whatsapp-clone-166a2.firebaseapp.com",
    projectId: "whatsapp-clone-166a2",
    storageBucket: "whatsapp-clone-166a2.appspot.com",
    messagingSenderId: "1041807309490",
    appId: "1:1041807309490:web:61564762087e5c4c9ee7ab"
  };

//   to connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

// to connect database
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;