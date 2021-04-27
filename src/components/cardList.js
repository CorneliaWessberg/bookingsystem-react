import React from "react";
import { Card } from "./card";




const Classes = [

    { className: "Core", classTime: "13.00", classInstructor: "Cattis", classDuration: "30min" },
    { className: "Tabatha", classTime: "11.00", classInstructor: "Tom", classDuration: "30min" },
    { className: "HIT", classTime: "07.00", classInstructor: "George", classDuration: "45min" },
    { className: "Bodypump", classTime: "06.30", classInstructor: "Mikaela", classDuration: "60min" },
    { className: "Zumba", classTime: "05.30", classInstructor: "Robin", classDuration: "60min" },
    { className: "Spinning", classTime: "18.00", classInstructor: "Will", classDuration: "45min" }
]


function CardList() {

    return (
        <div className="flex flex-row flex-wrap justify-center justify-evenly">

            {Classes.map((e) => {
                return (
                    <Card key={e.className} className={e.className} classTime={e.classTime} classInstructor={e.classInstructor} classDuration={e.classDuration} />
                )
            })}

        </div>
    )
}

export default CardList;