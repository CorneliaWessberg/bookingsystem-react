import React from 'react'
import firestore from "./firebaseConfig";


import dotenv from 'dotenv'

dotenv.config();

function FirebaseDatainput() {
    
        firestore.collection("test").add({
            name: "Skriver in data i firebase",  
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log("Document written with ID: ", docRef);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        
    
    
    return (
        <>
         <button onClick={FirebaseDatainput}> Skriver in data i Firebase </button>
        
        </>
    )
}

export default FirebaseDatainput;
