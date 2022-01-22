import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCsUwzHAVb1x2wr0cn-tGUji3-fiAroFIA",
  authDomain: "clone-9b302.firebaseapp.com",
  projectId: "clone-9b302",
  storageBucket: "clone-9b302.appspot.com",
  messagingSenderId: "462236359739",
  appId: "1:462236359739:web:c6801cc4e728780bf9d01e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }