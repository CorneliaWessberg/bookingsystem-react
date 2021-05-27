import React, { useState } from "react";
import {Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import logo from "./images/logo.png";


function Card({ className, classTime, classDescription, classDuration, image }) {

  const customStyles = {
    content: {
      background: "white",
      top: '20%',
      left: '47%',
      right: 'auto',
      bottom: 'auto',
      width: '40%',
      transform: 'translate(-40%, -10%)'
    }
  };

  const initialValues = {
    firstname: "",
    lastname: "",
    mobile: null

  }



  const [modalIsOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialValues)
  const [error, setError] = useState("")
  const [confirmation, setConfirmation] = useState(false)
  const token = localStorage.getItem("jwt")
  const userId = useState(localStorage.getItem("userId"))

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {

    setIsOpen(false)
  }


  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })

    console.log(formValues)
  }

  async function onSubmit(e) {
    
    console.log(userId)
    
    e.preventDefault();




    try {

      const response = await axios.post("http://localhost:1337/bookings", {
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        mobile: Number(formValues.mobile),
        users_permissions_user:userId
        


      })
      setConfirmation(true)
      console.log(response)
    }
    catch (error) {
      setError("Something went wrong, try again");
      console.log(error)
    }

  }







  return (
    <>
      {token ? (<div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">

        <div class="justify-center text-center px-4 py-4">
          <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
          <img src={`http://localhost:1337${image.formats.small.url}`} alt="image from database" />
          <p class="text-gray-700 text-base p-2"><strong>Time:</strong> {classTime}</p>
          <p class="text-gray-700 text-base p-2"><strong>Description: </strong> {classDescription}</p>
          <p class="text-gray-700 text-base p-2"><strong>Duration: </strong> {classDuration} min</p>
          <div class="px-6 pt-4 pb-2">

            <button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
              onClick={openModal}>
              Book
      </button>



          </div>
        </div>

      </div>)
        : (<div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">

          <div class="justify-center text-center px-4 py-4">
            <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
            <img src={`http://localhost:1337${image.formats.small.url}`} alt="image from database" />
            <p class="text-gray-700 text-base p-2"><strong>Time:</strong> {classTime}</p>
            <p class="text-gray-700 text-base p-2"><strong>Description: </strong> {classDescription}</p>
            <p class="text-gray-700 text-base p-2"><strong>Duration: </strong> {classDuration} min</p>
            <div class="px-6 pt-4 pb-2">
              <div class="font-bold">You have to be logged in to book a class!</div>
              <Link to="/login"><button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200">
                Login
      </button></Link>



            </div>
          </div>

        </div>

        )

      }

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal">

        {confirmation ? <div> Thanks for your booking! see all your bookings <strong><Link to="/bookings">HERE</Link></strong></div>
          : <div class="bg-white lg:w-5/6 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
              <button onClick={closeModal}>X</button>
              <h1>{error}</h1>
              <h1 class="font-medium text-2xl mt-3 text-center">Confirm booking</h1>
              <form action="" class="mt-6" onSubmit={onSubmit} method="POST">
                <div class="my-5 text-sm">
                  <label for="username" class="block text-black">firstname:</label>
                  <input type="text" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username"
                    value={formValues.firstname}
                    name="firstname"
                    onChange={onChange}
                    placeholder="firstname" />
                </div>
                <div class="my-5 text-sm">
                  <label for="username" class="block text-black">lastname:</label>
                  <input type="text" autofocus id="email" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username"
                    value={formValues.lastname}
                    name="lastname"
                    onChange={onChange}
                    placeholder="lastname" />
                </div>
                <div class="my-5 text-sm">
                  <label for="password" class="block text-black">mobile:</label>
                  <input type="number" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password"
                    value={formValues.mobile}
                    name="mobile"
                    onChange={onChange}
                    placeholder="mobile" />
                  <div class="flex justify-end mt-2 text-xs text-gray-600">
                  </div>
                </div>

                <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Confirm</button>
              </form>

            </div>
          </div>
        }</Modal>
    </>


  )
}

function Card2({ memberDuration, memberInfo, memberPrice }) {
  return (
    <>
      <div class="flex ">
        <div class="m-8 w-full bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
          <div id="header" class="flex">
            <img alt="mountain" class="w-45 rounded-md border-2 border-gray-300" src={logo} width="250" height="250" />
            <div id="body" class="flex flex-col ml-5">
              <h3 id="name" class="text-xl font-semibold mb-2">{memberDuration}</h3>
              <p id="job" class="text-gray-800 mt-2">Description: {memberInfo}</p>
              <h3 id="name" class="text-xl font-semibold mb-2">Price: {memberPrice}</h3>
              <Link to="/cardlist"><button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"> BUY</button></Link>
              <div class="flex mt-5">
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export { Card, Card2 };