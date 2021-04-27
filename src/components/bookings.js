import React from "react";
import { Link } from "react-router-dom";


function Bookings({ key }) {
    return (
        <>
            <div class="flex justify-center flex-col">
                <h1 class="italic text-gray-800 text-2xl p-3.5">Thanks for your booking! Here you can see all your booked classes. </h1><br />
                <div class="w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">

                    <div class="px-4 py-4">
                        <div class="font-bold text-xl mb-2 p-3.5">Core {key} </div>

                        <p class="text-gray-700 text-base p-2">Time: 13.00</p>
                        <p class="text-gray-700 text-base p-2">Instructor: Cattis </p>
                        <p class="text-gray-700 text-base p-2">Duration: 30min </p>
                        <div class="px-6 pt-4 pb-2">
                        <button class="flex justify-center text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-200">
                            Cancel
                        </button>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )


}

export default Bookings;