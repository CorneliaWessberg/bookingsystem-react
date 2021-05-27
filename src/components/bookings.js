import React, {useState, useEffect} from "react";
import axios from "axios";
import BookingCard from "./bookingCard";


function Bookings() {

   
    const [bookings, setBookings] = useState([]);
    const username = localStorage.getItem("username")
    const [userId, setUserId] = localStorage.getItem("userId")
    const [token, setToken] = localStorage.getItem("jwt")


    useEffect(()=>{
        
        console.log(userId)

        const fetchData = async () => {
        const response = await axios.get(`http://localhost:1337/bookings?users_permissions_user.id=${userId}`,
        {
            Headers: {
              Authorization: 
              `Bearer ${token}`,
            }
          })
        
  
        setBookings(response.data);
      };
      console.log(bookings);
  
      fetchData();
    }, []);
    

    return (
        <>
    
    <div class="text-3xl text-black dark:text-white font-medium m-2 mb-4 text-center">Hello <strong>{username}</strong>! Here you can see all your booked classes :)</div>
       <div class=" h-screen flex flex-row flex-wrap justify-center justify-evenly">
           

                {bookings.map( (booking) => {
                return (
                    <BookingCard key={booking.id} className={booking.product.Name} classTime={booking.product.Time} image={booking.product.Img} />
                )
            })}

    </div>  
        </>
  )}


        

export default Bookings;