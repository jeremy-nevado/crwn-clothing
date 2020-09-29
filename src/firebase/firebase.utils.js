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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
