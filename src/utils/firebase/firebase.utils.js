// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    confirmPasswordReset,
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGPFpkUwCqHwb-XtUQBtihhUss94CpxSo",
    authDomain: "crwn-store-15994.firebaseapp.com",
    projectId: "crwn-store-15994",
    storageBucket: "crwn-store-15994.appspot.com",
    messagingSenderId: "225145608280",
    appId: "1:225145608280:web:e36829486e620e6ef1122d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, name = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        console.log("NOT EXIST!!!!!");
        const { displayName, email } = Object.assign(userAuth, name);

        const createAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createAt });
        } catch (error) {
            console.log("error->", error.message);
        }
    }
    return userDocRef;
}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signinWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => {
    return await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback);
}


// upload data to firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj)
    })
    await batch.commit();
    console.log("Done");
}

// Retrieve data from firebase
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
    return categoryMap;
}