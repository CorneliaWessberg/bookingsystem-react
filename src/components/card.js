import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";



//function där card med klass info skapas
//Modal som öppnas för att slutföra bokning

/*const stripePromise = loadStripe('pk_test_51J2GIIBqmCfknoaAnanXPByjry9Im1Xj2OcaDhDgkLNPguFDmTwOPtgcTr9rP4zEQfEdxctMXhEDvjZUN8bSxkbH00NxnT121o');*/

function Card({ productId, className, classTime, classDescription, classDuration, image }) {

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

  const updateValues = {

    classname: "", 
    classtime: "",
    classdescription: "",
    classduration: ""

  }
 

  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  

  const [formValues, setFormValues] = useState(initialValues)
  const [updateVal, setUpdateVal] = useState(updateValues)

  const [error, setError] = useState("")
  const [confirmation, setConfirmation] = useState(false)

  const token = localStorage.getItem("jwt")
  const userId = localStorage.getItem("userId")
  const isAdmin = localStorage.getItem("role")
  

 
  
  //const [classId, setclassId] = useState("")

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {

    setIsOpen(false)
  }

  function openUpdate() {
    setUpdateModal(true)
  }

  function closeUpdate() {
    setUpdateModal(false)
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
        users_permissions_user: userId,
        class: className,
       

      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
      )

      setConfirmation(true)
      console.log(response)
    }

    catch (error) {
      setError("Something went wrong, try again");
      console.log(error)
    }

  }

  function handleOnChange(e) {
    e.preventDefault();

    setUpdateVal({ ...updateVal, [e.target.name]: e.target.value })
}

  async function handleOnSubmit(e) {
    e.preventDefault();

    console.log(productId)
    console.log(updateVal.classname)
    console.log(updateVal.classtime)
    console.log()

        await axios.put(`http://localhost:1337/products/${productId}`, {
        name: updateVal.classname,
        time: Number(updateVal.classtime),
        description: updateVal.classdescription,
        duration: Number(updateVal.classduration)
        

  }).then((response) => {
    console.log(response)
    updateVal(response)

  }).catch((error) => {
   
      console.log(error)
  })}

  function deleteClass() {

    axios.delete(`http://localhost:1337/products/${productId}`)
    window.location.reload();
      
      
    }
  


  //Visas edit och delete button om man är admin annars bara book button

  return (
    <>
      {isAdmin === "admin"? (<div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center" id={productId}>

        <div class="justify-center text-center px-4 py-4">
          <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
          <img src={`http://localhost:1337${image.formats.small.url}`} alt="" />
          <p class="text-gray-700 text-base p-2"><strong>Time:</strong> {classTime}</p>
          <p class="text-gray-700 text-base p-2"><strong>Description: </strong> {classDescription}</p>
          <p class="text-gray-700 text-base p-2"><strong>Duration: </strong> {classDuration} min</p>
          <div class="px-6 pt-4 pb-2">
          
            <button class="m-2 flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
              onClick={openModal}>
              Book
        </button>
        
        <div class="">
        <button class="m-2 flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
              onClick={openUpdate}>
              Edit
        </button>
        <button class="m-2 flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
              onClick={deleteClass}>
              Delete
        </button></div>


          </div>
        </div>

      </div>)
        : (<div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center" id={productId}>

          <div class="justify-center text-center px-4 py-4">
            <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
            <img src={`http://localhost:1337${image.formats.small.url}`} alt="" />
            <p class="text-gray-700 text-base p-2"><strong>Time:</strong> {classTime}</p>
            <p class="text-gray-700 text-base p-2"><strong>Description: </strong> {classDescription}</p>
            <p class="text-gray-700 text-base p-2"><strong>Duration: </strong> {classDuration} min</p>
            <div class="px-6 pt-4 pb-2">
        
              <button onClick={openModal} class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200">
                Book
              </button>



            </div>
          </div>

        </div>

        )
        //När man slutfört sin bokning med sina uppgifter kommer upp ruta där man kan klicka vidare till mina bokningar
      }


      <Modal
      isOpen={updateModal}
      onRequestClose={closeUpdate}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Edit Modal">

      <div class="bg-white lg:w-5/6 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
              <button onClick={closeUpdate}>X</button>
              <h1>{error}</h1>
              <h1 class="font-medium text-2xl mt-3 text-center">Edit Class: {className}</h1>
              <form action="" class="mt-6" onSubmit={handleOnSubmit} method="POST">
                <div class="my-5 text-sm">
                  <label class="block text-black">Classname:</label>
                  <input type="text" id="firstname" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Name"
                    value={updateVal.classname}
                    name="classname"
                    onChange={handleOnChange}
                   />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">Class-time:</label>
                  <input type="number" id="lastname" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Time"
                    value={updateVal.classtime}
                    name="classtime"
                    onChange={handleOnChange}
                     />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">Class-description:</label>
                  <input type="text" id="lastname" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Description"
                    value={updateVal.classdescription}
                    name="classdescription"
                    onChange={handleOnChange}
                     />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">Class-duration:</label>
                  <input type="number" id="mobile" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Duration"
                    value={updateVal.classduration}
                    name="classduration"
                    onChange={handleOnChange}
                     />
                  <div class="flex justify-end mt-2 text-xs text-gray-600">
                  </div>
                </div>

                <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Confirm</button>
                </form>

            </div>
          </div>
        
      </Modal>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Booking Modal">

        {confirmation ? <div> Thanks for your booking! see all your bookings <strong><Link to="/bookings">HERE</Link></strong></div>
          : <div class="bg-white lg:w-5/6 md:6/12 w-10/12 m-auto my-10 shadow-md">
            <div class="py-8 px-8 rounded-xl">
              <button onClick={closeModal}>X</button>
              <h1>{error}</h1>
              <h1 class="font-medium text-2xl mt-3 text-center">Confirm booking</h1>
              <form action="" class="mt-6" onSubmit={onSubmit} method="POST">
                <div class="my-5 text-sm">
                  <label class="block text-black">firstname:</label>
                  <input type="text" id="firstname" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Firstname"
                    value={formValues.firstname}
                    name="firstname"
                    onChange={onChange}
                   />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">lastname:</label>
                  <input type="text" id="lastname" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Lastname"
                    value={formValues.lastname}
                    name="lastname"
                    onChange={onChange}
                     />
                </div>
                <div class="my-5 text-sm">
                  <label class="block text-black">mobile:</label>
                  <input type="number" id="mobile" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Mobile"
                    value={formValues.mobile}
                    name="mobile"
                    onChange={onChange}
                     />
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



export default Card;