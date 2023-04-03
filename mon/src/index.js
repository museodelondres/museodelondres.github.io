// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
import 'firebase/compat/database';
import 'firebase/analytics';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDUhSvYeKSrOEXt0oH47-676gbVhnp1A0",
    authDomain: "museo-85b70.firebaseapp.com",
    databaseURL: "https://museo-85b70-default-rtdb.firebaseio.com",
    projectId: "museo-85b70",
    storageBucket: "museo-85b70.appspot.com",
    messagingSenderId: "862215816865",
    appId: "1:862215816865:web:c1bc35199fe3299264d2e0",
    measurementId: "G-4P3RQZBW4G"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const database = firebase.database();