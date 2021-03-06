import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyATCB3Y29wHtW6Ug6NyQsHurm_d-7e8p2I",
    authDomain: "slackclone-83573.firebaseapp.com",
    projectId: "slackclone-83573",
    storageBucket: "slackclone-83573.appspot.com",
    messagingSenderId: "68256755573",
    appId: "1:68256755573:web:1a762892bbc776fbb96d3c"
  };

  firebase.initializeApp(firebaseConfig);
 
export const auth = firebase.auth();
export const db = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();