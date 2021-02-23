import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCDOe_C4VT_CXH5ucZYt9zqe_Js1lF0VNU",
    authDomain: "guayaba-ef9c1.firebaseapp.com",
    projectId: "guayaba-ef9c1",
    storageBucket: "guayaba-ef9c1.appspot.com",
    messagingSenderId: "890834669486",
    appId: "1:890834669486:web:60cccf99614b980184423f"  
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}