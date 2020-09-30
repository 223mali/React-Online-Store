import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAJVZIHdyBldWFelkdWaPvfMg39sC_NCOI",
    authDomain: "crwn-db-ca193.firebaseapp.com",
    databaseURL: "https://crwn-db-ca193.firebaseio.com",
    projectId: "crwn-db-ca193",
    storageBucket: "crwn-db-ca193.appspot.com",
    messagingSenderId: "678594596739",
    appId: "1:678594596739:web:d16d952a60d944a29cb0b6",
    measurementId: "G-JX89NGXK9Z"
}

firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;