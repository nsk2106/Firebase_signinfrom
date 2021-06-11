import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyABlRhh_ig0dQ-T7fY9Lafk5x-JW3ZBHZ4",
    authDomain: "conatctform-46d82.firebaseapp.com",
    projectId: "conatctform-46d82",
    storageBucket: "conatctform-46d82.appspot.com",
    messagingSenderId: "155515846576",
    appId: "1:155515846576:web:510415c9e08d9837c9a075",
    measurementId: "G-LVCNQ46PER"
});

var db = firebaseApp.firestore();

export { db };