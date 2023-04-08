import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPeeCDm0Q97qE3-evZtdw1A89_KQo9ozQ",
    authDomain: "rockbrand-652a6.firebaseapp.com",
    databaseURL: "https://rockbrand-652a6-default-rtdb.firebaseio.com",
    projectId: "rockbrand-652a6",
    storageBucket: "rockbrand-652a6.appspot.com",
    messagingSenderId: "40042310578",
    appId: "1:40042310578:web:cfd129e6accae9a2b812ab"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;