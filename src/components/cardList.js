import React, { useEffect, useState } from "react";
import { Card } from "./card";
import axios from "axios";

//function där alla classes loopas ut och visas på sidan
//använder useEffect för pagination

function CardList() {


    const [classes, setClasses] = useState([]);
    const [loadPage, setLoadPage] = useState(6);
    const [jwt, setJWT] = useState("")
    const username = localStorage.getItem("username")

    useEffect(() => {
        const JWT = localStorage.getItem("jwt")
        setJWT(JWT)
    }, [])

    useEffect(() => {

        const fetchClasses = async () => {
            const response = await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
            console.log(response)
            setClasses(response.data)
        }

        fetchClasses()
    }, [loadPage])


    function showMore() {

        let dynamic = loadPage + 3;
        setLoadPage(dynamic)
    }

    function showLess() {
        setLoadPage(6)
    }


    return (
        <>

            <div className="md:text-6xl text-4xl text-black dark:text-white font-medium m-2 mb-4 text-center">Welcome {username}</div>
            <div className="flex flex-row flex-wrap justify-center justify-evenly">


                {classes.map((product) => {
                    return (
                        <Card key={product.id} className={product.name} classTime={product.time} classDescription={product.description} classDuration={product.duration} image={product.img} />
                    )
                })}

            </div>

            {loadPage >= classes.length ?
                (<button class="flex m-2 justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200" onClick={showMore}>Load more</button>)
                :
                (<button class="flex m-2 justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200" onClick={showLess}>Show less</button>)}

        </>)
}

export default CardList;