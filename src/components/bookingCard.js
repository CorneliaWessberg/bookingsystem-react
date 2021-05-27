import React from 'react';
import axios from "axios";


function BookingCard(bookingId, className, image, classTime) {

    function cancelBooking() {
        axios.delete(`http://localhost:1337/bookings/${bookingId}`)
        window.location.reload();
    }

    return (
        <>

            <div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">

                <div class="justify-center text-center px-4 py-4">
                    <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
                   <img src={`http://localhost:1337${image.formats.small.url}`} alt="image from database" />
                    <p class="text-gray-700 text-base p-2"><strong>Time:</strong> {classTime}</p>
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
