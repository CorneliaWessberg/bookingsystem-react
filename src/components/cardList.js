import React, { useEffect, useState } from "react";
import { Card } from "./card";
import axios from "axios";



const Classes = [

    /*{key: "1", className: "Core", classTime: "13.00", classDescription: "Cattis", classDuration: "30min" },
    { className: "Tabatha", classTime: "11.00", classDescription: "Tom", classDuration: "30min" },
    { className: "HIT", classTime: "07.00", classDescription: "George", classDuration: "45min" },
    { className: "Bodypump", classTime: "06.30", classDescription: "Mikaela", classDuration: "60min" },
    { className: "Zumba", classTime: "05.30", classDescription: "Robin", classDuration: "60min" },
    { className: "Spinning", classTime: "18.00", classDescription: "Will", classDuration: "45min" }*/ 
]


function CardList() {


    const [classes, setClasses] = useState([]);
    const [loadPage, setLoadPage] = useState(3)
    const [jwt, setJWT] = useState("")
    const [username, setUsername] = useState("")

    useEffect( ()=> {
        const JWT = localStorage.getItem("jwt")
        setJWT(JWT)
    }, [])

    useEffect(()=>{

        const fetchClasses = async()=>{
            const response = await axios.get("http://localhost:1337/products")
            setClasses(response.data)
        } 

        fetchClasses()
    }, [])
    
    
    
    

    return (
        <>
        

        <div className="flex flex-row flex-wrap justify-center justify-evenly">

            {classes.map((products) => {
                return (
                    <Card key={products.id} className={products.name} classTime={products.time} classDescription={products.description} classDuration={products.duration} image={products.img} />
                )
            })}

        </div>
</>   )
}

export default CardList;