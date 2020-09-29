import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBYhrODgHbyPOmLGZxeiWaIrO3hbJJeRh8",
    authDomain: "crwn-db-f293d.firebaseapp.com",
    databaseURL: "https://crwn-db-f293d.firebaseio.com",
    projectId: "crwn-db-f293d",
    storageBucket: "crwn-db-f293d.appspot.com",
    messagingSenderId: "777753565482",
    appId: "1:777753565482:web:f464d63a73123cfeb8e653",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
