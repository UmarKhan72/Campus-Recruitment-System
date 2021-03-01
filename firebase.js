import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBIKKQYiRIMVbCjHEHZqrecHeMCgQY4AjA",
  authDomain: "campus-recruitment-898e1.firebaseapp.com",
  projectId: "campus-recruitment-898e1",
  storageBucket: "campus-recruitment-898e1.appspot.com",
  messagingSenderId: "5560982086",
  appId: "1:5560982086:web:316f2483cf60eda29d0847",
  measurementId: "G-QH276YRRKR"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
