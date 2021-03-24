import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCcGf4lq49TTiSzDARNLhsAocki1JjhyI4',
  authDomain: 'linkedin-clone-40bc4.firebaseapp.com',
  projectId: 'linkedin-clone-40bc4',
  storageBucket: 'linkedin-clone-40bc4.appspot.com',
  messagingSenderId: '771905564124',
  appId: '1:771905564124:web:49dae168a890d89fdab319',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
