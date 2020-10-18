import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCkyMoGMXFN07vNt7eyZ_URW-J-LzFTJIE",
    authDomain: "advanceddiscord.firebaseapp.com",
    databaseURL: "https://advanceddiscord.firebaseio.com",
    projectId: "advanceddiscord",
    storageBucket: "advanceddiscord.appspot.com",
    messagingSenderId: "509691603685",
    appId: "1:509691603685:web:0e8c192882b93ce590c20c",
    measurementId: "G-HN1MP734GP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
