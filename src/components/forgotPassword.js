import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

//function för att återställa lösenord om man glömt (inte helt fungerande ännu)

function ForgotPassword() {

    const [reset, setReset] = useState(false)

    function resetRequest() {
        axios
            .post('https://corneliabookingbackend.herokuapp.com/auth/forgot-password', {
                email: 'cornelia.wessnass@gmail.com',
            })
            .then(response => {
                console.log('Your user received an email', response);
                setReset(true)
            })
            .catch(error => {
                console.log('error:', error.response);
            });
    }

    return (
        <>
            {reset ? (
                <div class="bg-white mt-44 lg:w-6/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                    <div class="py-8 px-8 rounded-xl">
                        <div class="my-5 text-sm">
                            <h1 class="text-xl font-semibold mb-2 text-center">You have now received an email to reset your password! Back to <Link to="/login">Login</Link></h1>
                        </div>
                    </div>
                </div>)

                : (<div class="h-screen">
                    <div class="bg-white mt-44 lg:w-6/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                        <div class="py-8 px-8 rounded-xl">
                            <div class="my-5 text-sm">
                                <h1 class="text-xl font-semibold mb-2 text-center">Reset your password here!</h1>
                                <button onClick={resetRequest} class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Reset Password</button>
                                <h3>Back to <strong><Link to="/login">Login</Link></strong></h3>
                            </div>
                        </div>
                    </div>
                </div>)
            } </>
    )
}
export default ForgotPassword;