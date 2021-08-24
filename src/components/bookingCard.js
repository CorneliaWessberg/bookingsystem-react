import React from 'react';
import axios from "axios";

//Hur Card ser ut på mina bokningar sidan, function som även sköter att cancel bokning

function BookingCard({bookingId, firstname, lastname, bookedClass}) {

    function cancelBooking() {
        axios.delete(`https://corneliabookingbackend.herokuapp.com/bookings/${bookingId}`)
        window.location.reload();
    }

    return (
        <>

            <div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">

                <div class="justify-center text-center px-4 py-4">
                    <div class="text-gray-700 text-base p-2"><strong>Firstname:</strong> {firstname}</div>
                    <p class="text-gray-700 text-base p-2"><strong>Lastname:</strong> {lastname}</p>
                    <p class="text-gray-700 text-base p-2"><strong>Upcoming class: </strong> {bookedClass}</p>
                    <div class="px-6 pt-4 pb-2">
                        <button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
                            onClick={cancelBooking}>
                            Cancel
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BookingCard;
