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

export const createUserProfileDocument = async  (userAuth, ...additionalProps)=>{
    console.log(additionalProps)
    if(!userAuth){
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if(!snapShot.exists){

        let {email, displayName} = userAuth;
        if(!displayName){

            displayName = additionalProps[0]
            console.log('displayName', additionalProps[0] )
        }
        const createdAt = new Date();

        try{

            console.log(displayName);

            await userRef.set({
                displayName,
                createdAt,
                email,
                ...additionalProps
            })

        }catch(error){
            console.log(error.message)
        }


    }

    return userRef
}

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;