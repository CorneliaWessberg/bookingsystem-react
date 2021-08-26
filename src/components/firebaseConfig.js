import dotenv from 'dotenv'
import firebase from "firebase";


dotenv.config();


console.log(process.env.REACT_APP_APIKEY)

// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  const firebaseConfig = {
   apiKey: process.env.REACT_APP_APIKEY,
   authDomain: "wie20sproject-c95a9.firebaseapp.com",
   databaseURL: "https://wie20sproject-c95a9-default-rtdb.firebaseio.com",
   projectId: "wie20sproject-c95a9",
   storageBucket: "wie20sproject-c95a9.appspot.com",
   messagingSenderId: "208770914681",
   appId: "1:208770914681:web:b059d625586bc48a53b7a8",
   measurementId: "G-8DP57284XP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();

export default firestore;