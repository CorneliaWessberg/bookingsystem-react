import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

//function för meny/navigaton. Renderar olika beroende på om man är inloggad. 

function Menu() {

  const [jwt, setJWT] = useState("")
  const isAdmin = localStorage.getItem("role")

  useEffect(() => {
    const JWT = localStorage.getItem("jwt")
    setJWT(JWT)
  }, [])


  return (

    <>
      {jwt ? 
        (
          <nav class="bg-gray-900 h-32">

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-left">

              <div class="flex items-center justify-between h-28">
                <Link to="/"><img className="hidden lg:block h-20 w-auto rounded self-start" src={logo} width="100" height="100" alt="gym" /></Link>

                <div class="flex items-center">
                  <div class="flex-shrink-0">

                  </div>

                  <div class="hidden md:block"></div>
                  <div class="ml-10 flex items-baseline space-x-4"></div>

                  <Link to="/cardlist" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg" aria-current="page">All Classes</Link>
                  <Link to="/memberships" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">Memberships</Link>
                  <Link to="/bookings" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">My bookings</Link>
                  <Link to="/Profile"class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">My Profile</Link>
                  {isAdmin === "admin" ? (<><Link to="/adminDashboard"  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">Dashboard</Link>
                  <Link to="/addClass" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg" aria-current="page">Add Class</Link></>) : (<div></div>)}
                  <Link to="/logout" class="absolute right-4 py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">Logout</Link>
                </div>
              </div>
            </div>
            <div class="hidden md:block"></div>
            <div class="ml-4 flex items-center md:ml-6">

            </div></nav>) 
            
        : (<div>
          <nav class="bg-gray-900 h-32">

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-left">

              <div class="flex items-center justify-between h-28">
                <Link to="/"><img className="hidden lg:block h-20 w-auto rounded self-start" src={logo} width="100" height="100" alt="gym" /></Link>

                <div class="flex items-center">
                  <div class="flex-shrink-0">

                  </div>

                  <div class="hidden md:block"></div>
                  <div class="ml-10 flex items-baseline space-x-4"></div>

                  <Link to="/cardlist" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg" aria-current="page">All Classes</Link>
                  <Link to="/memberships" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">Memberships</Link>
                  <Link to="/registration" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">Register</Link>
                  <Link to="/login" class="absolute right-4 py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-lg">Login</Link>
                </div>
              </div>
            </div>
            <div class="hidden md:block"></div>
            <div class="ml-4 flex items-center md:ml-6">

            </div></nav>



        </div>) 
        
      }</>


  )
}

export default Menu;