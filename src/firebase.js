import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAesy3kvQNxec9cJrDaC57g53iAy3LKzVk",
    authDomain: "facebook-clone-eb174.firebaseapp.com",
    databaseURL: "https://facebook-clone-eb174.firebaseio.com",
    projectId: "facebook-clone-eb174",
    storageBucket: "facebook-clone-eb174.appspot.com",
    messagingSenderId: "331585705779",
    appId: "1:331585705779:web:b5efbcaef7a4e60a26d046"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;