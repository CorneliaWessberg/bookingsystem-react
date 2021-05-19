import React, { useEffect, useState } from "react";
import { Card } from "./card";
import axios from "axios";



const Classes = [

    {key: "1", className: "Core", classTime: "13.00", classDescription: "Cattis", classDuration: "30min" },
    { className: "Tabatha", classTime: "11.00", classDescription: "Tom", classDuration: "30min" },
    { className: "HIT", classTime: "07.00", classDescription: "George", classDuration: "45min" },
    { className: "Bodypump", classTime: "06.30", classDescription: "Mikaela", classDuration: "60min" },
    { className: "Zumba", classTime: "05.30", classDescription: "Robin", classDuration: "60min" },
    { className: "Spinning", classTime: "18.00", classDescription: "Will", classDuration: "45min" } 
]


function CardList() {


    const [classes, setClasses] = useState([]);

    useEffect(()=>{

        const fetchClasses = async()=>{
            const response = await axios.get("http://localhost:1337/Products")
            setClasses(response.data)
        } 

        fetchClasses()
    }, [])
    
    
    
    

    return (
        <div className="flex flex-row flex-wrap justify-center justify-evenly">

            {Classes.map((Classes) => {
                return (
                    <Card key={Classes.className} className={Classes.className} classTime={Classes.classTime} classDescription={Classes.classDescription} classDuration={Classes.classDuration} />
                )
            })}

        </div>
    )
}

export default CardList;