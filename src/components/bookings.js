import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingCard from "./bookingCard";

//function där den userId:s som är inloggad classes som är bokade visas. (inte helt fungerande ännu)

function Bookings() {


    const [bookings, setBookings] = useState([]);
    const [username] = useState(localStorage.getItem("username"))
    const [ userId] = useState(localStorage.getItem("userId"))
    const [token] =useState( localStorage.getItem("jwt"))


    useEffect(() => {

        console.log(userId)

        const fetchData = async () => {
            const response = await axios.get(`https://corneliabookingbackend.herokuapp.com/bookings?users_permissions_user.id=${userId}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`,
                    }
                })


            setBookings(response.data);
        };
        console.log(bookings);

        fetchData();
    }, [token, bookings, userId]);


    return (
        <>
            <div className="h-screen">
            <div className="text-3xl text-black dark:text-white font-medium m-2 mb-4 text-center">Hello <strong>{username}</strong>! Here you can see all your booked classes </div>
            <div className="  flex flex-row flex-wrap justify-center justify-evenly">


                {bookings.map((booking) => {
                    return (
                        <BookingCard key={booking.id} bookingId={booking.id} firstname={booking.firstname} lastname={booking.lastname} bookedClass={booking.class} />
                    )
                })}

            </div></div>
        </>
    )
}




export default Bookings;