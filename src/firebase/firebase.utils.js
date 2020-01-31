import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyCw0nJ3-iO5-vG0iX_qohRDtAuaiv02qfg",
        authDomain: "crwn-db-10717.firebaseapp.com",
        databaseURL: "https://crwn-db-10717.firebaseio.com",
        projectId: "crwn-db-10717",
        storageBucket: "crwn-db-10717.appspot.com",
        messagingSenderId: "789960404903",
        appId: "1:789960404903:web:960434d62536a7e8175082",
        measurementId: "G-FERVY14RQ7"
      
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;