import React, {useState} from "react";
import {Link} from "react-router-dom";


function Form() {

const initialValues = {
    
    firstname : "",
    lastname : "",
    Email : "" ,
    Telephone : ""
}


const [formValues, setFormValues] = useState(initialValues);


function onSubmit(e) {
    e.preventDefault();
}

function onChange(e) {
    e.preventDefault();
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

return ( 
    <>
    <div>
      <div className="flex justify-center italic px-4 py-4 text-2xl">

        <form onSubmit={onSubmit}>
          <label className="italic font-bold text-gray-800 flex justify-center">
          Fill in your information and get ready!
          </label>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Firstname:
              </label>
            </div>
          <div class="md:w-2/3">
            <input
              value={formValues.firstName}
              name="firstName"
              onChange={onChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              placeholder="Firstname"
            />
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Lastname:
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                value={formValues.lastName}
                name="lastName"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Lastname"
              />           
            </div>
            </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              E-mail:
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                value={formValues.Email}
                name="address"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="mt-2 rounded-md">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Telephone:
              </label>
            </div>
            <div class="md:w-2/3">
              <input
                type="number"
                value={formValues.Telephone}
                name="Telephone"
                onChange={onChange}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                placeholder="Telephone"
              />
            </div>
          </div>
          <Link to="/bookings">
          <button className="m-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Confirm
          </button>
          </Link>
        </div>
      </form>
    </div>


  </div>
            
</>
    

 )
}

export default Form;