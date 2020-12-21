import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDFrtyZ1g-BCvZN5t734kjPx3vFNvVoZh8",
    authDomain: "r-store-2020.firebaseapp.com",
    databaseURL: "https://r-store-2020.firebaseio.com",
    projectId: "r-store-2020",
    storageBucket: "r-store-2020.appspot.com",
    messagingSenderId: "1027074817941",
    appId: "1:1027074817941:web:2efe01b00a5abe5d83809c",
    measurementId: "G-8HFVZZ2QE6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    console.log(snapShot)

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('ERROR! (user creating in DB process ...)', error.message)
        }
    }

    return userRef
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;