import React, { useState, useEffect } from 'react'
import firestore from "./firebaseConfig";

import dotenv from 'dotenv'

dotenv.config();


console.log(process.env.REACT_AUTHDOMAIN)
// process.env

function GetFirebaseData() {
    const [firebaseData, setFirebaseData] = useState("")
    useEffect(() => {

        const fetchData = async () => {
            const res = await firestore.collection("test").doc('XBub2OO9Wl9Q2vDoVeXM').get();



            setFirebaseData(res.data().name)


            console.log(res.data().name)


        }

        fetchData();

    }, [])

    return (
        <>
            {firebaseData}
        </>
    )
}

export default GetFirebaseData;