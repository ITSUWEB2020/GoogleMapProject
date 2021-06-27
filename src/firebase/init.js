
import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
 apiKey: "AIzaSyB1tQ4tj6ohh_PasEHPaWsyJgV_bVMnHJ8",
  authDomain: "geo-pro-6a818.firebaseapp.com",
  projectId: "geo-pro-6a818",
  storageBucket: "geo-pro-6a818.appspot.com",
  messagingSenderId: "663126666874",
  appId: "1:663126666874:web:974c32962bd38147a515c3"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export const db = firebaseApp.firestore();