import React, {useState, useEffect} from "react";
import Membership from "./membership";
import axios from "axios";



function MemberShipsList() {

    const [memberShip, setMembership] = useState([]);
   /* const [jwt, setJWT] = useState("")*/
    const username = localStorage.getItem("username")

    /*useEffect(() => {
        const JWT = localStorage.getItem("jwt")
        setJWT(JWT)
    }, [])*/

    useEffect(() => {

        const fetchMemberShips = async () => {
            const response = await axios.get(`http://localhost:1337/memberships`)
            console.log(response)
            setMembership(response.data)
        }

        fetchMemberShips()
    }, [])

    return (
        <>
        <div className="md:text-6xl text-4xl text-black dark:text-white font-medium m-2 mb-4 text-center">Welcome {username}</div>
        <div className="flex flex-row flex-wrap justify-center justify-evenly">

            {memberShip.map((Memberships) => {
                return (
                    <Membership key={Memberships.id} memberDuration={Memberships.duration} memberInfo={Memberships.description} memberPrice={Memberships.price} />
                )
            })}

        </div>
        </>
    )

}

export default MemberShipsList;