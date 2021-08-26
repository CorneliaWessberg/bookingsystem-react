import React from 'react'
import axios from "axios";
import dotenv from 'dotenv';
import {loadStripe} from '@stripe/stripe-js';
import logo from "./images/logo.png";


dotenv.config();
/*const stripePromise = loadStripe(process.env.REACT_APP_PK);*/

function Membership({ memberDuration, memberInfo, memberPrice }) {

  
       /* const handleClick = async (event) => {
            // Get Stripe.js instance
            const stripe = await stripePromise;
            const quantity = 1; // state /props 
            // Call your backend to create the Checkout Session
        
            // konsumerar / request 
            const response = await axios.post("http://localhost:4242/create-checkout-session", {name:memberDuration, quantity:quantity, price:memberPrice })
            //('/create-checkout-session', { method: 'POST' });
        
            console.log(response)
        
            const sessionId = response.data.id
        
            console.log(sessionId)
            // When the customer clicks on the button, redirect them to Checkout.
            const result = await stripe.redirectToCheckout({
              sessionId: sessionId,
            });
        
            if (result.error) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, display the localized error message to your customer
              // using `result.error.message`.
            }
          };*/

    return (        
          
              <>
                <div class="flex ">
                  <div class="m-8 w-full bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
                    <div id="header" class="flex">
                      <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" src={logo} width="250" height="250" />
                      <div id="body" class="flex flex-col ml-5">
                        <h3 id="name" class="text-xl font-semibold mb-2">{memberDuration} Months</h3>
                        <p id="job" class="text-gray-800 mt-2">Description: {memberInfo}</p>
                        <h3 id="name" class="text-xl font-semibold mb-2">Price: {memberPrice};-</h3>
                       <button role ="link" class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"> BUY</button>
                        <div class="flex mt-5">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          
          
              </>
            )
          }
        


export default Membership;
