import React from "react";
import {Link} from "react-router-dom";
import training from "./images/training.jpg";


function Card({className, classTime, classInstructor, classDuration}) {
    return (
<>
  <div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">
 
    <div class="px-4 py-4">
      <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
      <img src={training}/>
      <p class="text-gray-700 text-base p-2">Time: {classTime}</p>
      <p class="text-gray-700 text-base p-2">Instructor: {classInstructor}</p>
      <p class="text-gray-700 text-base p-2">Duration: {classDuration}</p>
      <div class="px-6 pt-4 pb-2">
      <Link to="./form">
      <button class="flex justify-center text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-200">
        Book
      </button>
      </Link>
      </div>
    </div>
  
  </div>
</>

          
    )
}

function Card2({memberDuration, memberInfo, memberPrice}) {
    return (
      <>

  <div class="w-3/4 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">
 
  <div class="px-4 py-4">
    <div class="font-bold text-xl mb-2 p-3.5">{memberDuration}</div>

    <p class="text-gray-700 text-base p-2">
     About: {memberInfo}
    </p>
    <p class="text-gray-700 text-base p-2">Price: {memberPrice} ;- </p>
   
    <div class="px-6 pt-4 pb-2">
      <Link to="./form">
    <button class="flex justify-center text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-200">
    Sign up
    </button>
    </Link>
  </div>
  </div>
  
</div>

      </>
    )
}

export {Card, Card2};