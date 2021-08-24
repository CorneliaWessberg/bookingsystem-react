import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

function ContactForm() {

    const initalValues = {
        name: "",
        email: "",
        message: "",
        
      }

      const [contactValues, setContactValues] = useState(initalValues)
      const history = useHistory();


      function onChange(e) {
        e.preventDefault();
        setContactValues({ ...contactValues, [e.target.name]: e.target.value })

      }

      function onSubmit(e) {
        e.preventDefault();
    
        axios.post("https://corneliabookingbackend.herokuapp.com/contacts", {
          name: contactValues.name,
          email: contactValues.email,
          message: contactValues.message
      })
      history.push("/");
    
    }

    return (
        <>
       <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-6 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <h1 className="justify-center font-bold text-3xl"> Contact us here !</h1>
            <form method="post" className="mt-8 space-y-6" onSubmit={onSubmit}>


              <div>
                <input id="email-address" value={contactValues.name} onChange={onChange} name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your name" />
              </div>


              <div>
                <input id="email-address" value={contactValues.email} onChange={onChange} name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Your E-mail" />
              </div>

              <div>
              <textarea id="message" value={contactValues.message} name="message" onChange={onChange} placeholder="Message.." class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"></textarea>
              </div>


              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
          Contact us
        </button>

            </form>

          </div>
        </div>
        </>
    )
}

export default ContactForm
