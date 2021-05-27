import React from "react";
import {Card2} from "./card";



const memberships = [

    {memberDuration: "1-year", memberInfo: "One year with all classes", memberPrice: "6500;-"} ,
    {memberDuration: "6-months", memberInfo: "& months with all classes", memberPrice: "4000;-"} ,
    {memberDuration: "1 trial month", memberInfo: "Try it out for one month for a special price", memberPrice: "500;-"} 
   
]



function MemberShipsList() {
    return (
        <div className="flex flex-row flex-wrap justify-center justify-evenly">
               
               {memberships.map((e)=>{
                   return (
                   <Card2 key={e.memberDuration} memberDuration={e.memberDuration} memberInfo={e.memberInfo} memberPrice={e.memberPrice} />
                   )
                })}

        </div>
    )

}

export default MemberShipsList;