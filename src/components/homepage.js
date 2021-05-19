import React, { useEffect } from 'react';
import { Card } from "./card";
import workout from "./images/workout.jpg";
import logo from "./images/logo.png";
import {Link} from "react-router-dom";






function Homepage() {




    return (
    
        <>
            <div class="max-w-6xl mx-auto md:px-6 px-4">
    <div class="md:py-20 py-12">
        <div class="md:pb-20 pb-12 max-w-3xl mx-auto text-center ">
            <h2 class="md:text-6xl text-4xl text-black dark:text-white font-bold mb-4">Welcome to the ultimate all-round workout place!</h2>
            <p class="text-xl text-gray-600 dark:text-gray-400">Here you can find everything from high-intensity classes, pure strength to yoga and pilates. 
            Everyone are welcome to try for free for the very first time.</p>
        </div>
    </div>
</div>
<div class="flex ">
<div class="m-8 w-2/4 bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex"> 
         <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" src={workout} width="250" height="250" />
         <div id="body" class="flex flex-col ml-5">
            <h3 id="name" class="text-xl font-semibold mb-2">Classes</h3>
            <p id="job" class="text-gray-800 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to="/cardlist"><button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"> All Classes</button></Link>
            <div class="flex mt-5">
               
               
            </div>
         </div>
      </div>
   </div>
   <div class="m-8 w-2/4 bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex"> 
         <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" src={logo} width="250" height="250"/>
         <div id="body" class="flex flex-col ml-5">
            <h3 id="name" class="text-xl font-semibold mb-2">Memberships</h3>
            <p id="job" class="text-gray-800 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Link to="/memberships"><button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"> All memberships</button></Link>
            <div class="flex mt-5">
              
              
            </div>
         </div>
      </div>
   </div>
   </div>
        </>
    )
}

export default Homepage
