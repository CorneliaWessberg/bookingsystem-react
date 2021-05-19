import React, { useEffect, useState } from "react";
import axios from "axios"; 

function API() {


    //HOOK, som att använda state men på ett "förenklat sätt", detta kallas för HOOK
    const [data, setData] = useState({});

    //useEffect, används mycket. Används när det händer saken inom componenten. t.ex att du vill 
    //på bara 1/10 inom componenten. Kan användas t.ex. för att mäta hur långt man scrollar på utseende- ändrar utseende efter viss punkt osv.
    useEffect(()=> {
        
        const fetchData = async()=> {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        // axios är ett fetch bibliotek , http get, post, update , delete 
        const res = response.data;
        // json.string
        setData(res)
        }

        fetchData()

    }, [])

     
    return (
        <>
            data skrivs ut: 
            {data.title};
            <div> Här gör vi ett API </div>

        </>
    )



}

export default API;