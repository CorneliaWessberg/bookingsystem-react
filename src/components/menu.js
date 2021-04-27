import React from "react";
import {Link} from "react-router-dom";

function Menu() {
    return(

        <>
        <div>
        <nav class="bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div class="flex items-center justify-between h-24">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-12 w-12" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"></img>
                </div>
                <div class="hidden md:block"></div>
                <div class="ml-10 flex items-baseline space-x-4"></div>
                <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">All Classes</Link>
                <Link to="/memberships" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Memberships</Link>
                <Link to="/form" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Book now</Link>
                <Link to="/bookings" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My bookings</Link>
                <Link to="/login" className="absolute right-4 py-2 px-3 bg-gray-300 text-yellow-900 rounded">Login</Link>
                  </div>
                </div>
              </div>
              <div class="hidden md:block"></div>
                <div class="ml-4 flex items-center md:ml-6">
                  
                  </div></nav>
              
    

        </div>
        <footer>
          <div></div>
        </footer>
     </>
      

    )
}

export default Menu; 