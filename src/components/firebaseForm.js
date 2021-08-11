import React, {useEffect, useState} from 'react';
import firestore from './firebaseConfig';
import dotenv from 'dotenv'

dotenv.config();


console.log(process.env.REACT_AUTHDOMAIN)

function FirebaseForm() {

    function setFirebaseData(){
        firestore.collection("test").add({
            name: "Skriver in data",
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log("Document written with ID: ", docRef);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    return (
      <>
      <button onClick={setFirebaseData}> Skriva in i firebase </button>
      
      </>  
    )
}

export default FirebaseForm;
