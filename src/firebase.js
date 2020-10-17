import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC0eeQnp8pUIM55nduT-7ILnimFD_0wtQA",
    authDomain: "discord-clone-f7bdb.firebaseapp.com",
    databaseURL: "https://discord-clone-f7bdb.firebaseio.com",
    projectId: "discord-clone-f7bdb",
    storageBucket: "discord-clone-f7bdb.appspot.com",
    messagingSenderId: "254626371012",
    appId: "1:254626371012:web:3c79a9de6612a208768091",
    measurementId: "G-YFMQ9W30VJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
