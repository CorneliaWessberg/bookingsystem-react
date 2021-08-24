import React, { useEffect, useState } from 'react'
import axios from "axios";

function Dashboard() {


    const [classes, setClasses] = useState([])
    const [users, setUsers] = useState([])
    const [bookings, setBookings] = useState([])


    useEffect(() => {

        const getUsers = async () => {
            const response = await axios.get(`https://corneliabookingbackend.herokuapp.com/users`)
            console.log(response)
            setUsers(response.data.length)
        }

        getUsers()
    }, [])

    useEffect(() => {

        const getClasses = async () => {
            const response = await axios.get(`https://corneliabookingbackend.herokuapp.com/products`)
            console.log(response)
            setClasses(response.data.length)
        }

        getClasses()
    }, [])

    useEffect(() => {

        const getBookings = async () => {
            const response = await axios.get(`https://corneliabookingbackend.herokuapp.com/bookings`)
            console.log(response)
            setBookings(response.data.length)
        }

        getBookings()
    }, [])

    

    return (
            <div className="h-screen">
                <div className="flex">
                  <div className="m-8 w-full bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
                    <div id="header" className="flex">
                      <div id="body" className="flex flex-col ml-5">
                        <h3 id="name" className="text-xl font-semibold mb-2">Classes on website: {classes}</h3>
                        <h3 id="name" className="text-xl font-semibold mb-2">Users on website: {users}</h3>
                        <h3 id="name" className="text-xl font-semibold mb-2">Bookings on website: {bookings}</h3>
                        <div className="flex mt-5">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
              </div>
        
    )
}

export default Dashboard;
