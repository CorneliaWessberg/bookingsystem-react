import React, {useState} from "react";
import {Link} from "react-router-dom";
import training from "./images/training.jpg";
import Modal from "react-modal";
import axios from "axios";


function Card({className, classTime, classDescription, classDuration}) {

  const customStyles = {
    content : {
      background            : "gray",
      padding:                "20px",
      height                : "300px",
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  const initialValues= {
    firstname: "",
    lastname: "",
    mobile: null  

  }

  const [modalIsOpen,setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialValues)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {

    setIsOpen(false)
   }


   function onHandleChange(e) {
     setFormValues({...formValues, [e.target.name]:e.target.value})
   }

   async function onHandleSubmit(e) {
     e.preventDefault();

     try {

      // om det är två ord 
      const response=  await axios.post("http://localhost:1337/user-bookings", {
      name:formValues.name,
      timeToAppointment:formValues.timeToAppointment,
      mobile:Number(formValues.mobile)
  })

      console.log(response)
}
      catch(error) {

      console.log(error.data)
}
   }



    return (
<>
  <div class="italic w-96 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">
 
    <div class="px-4 py-4">
      <div class="font-bold text-xl mb-2 p-3.5">{className}</div>
      <img src={training}/>
      <p class="text-gray-700 text-base p-2">Time: {classTime}</p>
      <p class="text-gray-700 text-base p-2">Description: {classDescription}</p>
      <p class="text-gray-700 text-base p-2">Duration: {classDuration}</p>
      <div class="px-6 pt-4 pb-2">
      
      <button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200"
      onClick={openModal}>
        Book
      </button>
      
      </div>
    </div>
  
  </div>
  
          <Modal 
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal">
            
          
          <div>Complete your booking here</div>
          <form onSubmit= {onHandleSubmit}>
          Firstname: <input type="text" name="firstname" value={formValues.firstname}  onChange={onHandleChange} /><br/>
          Lastname:<input type="text" name="lastname" value={formValues.lastname}  onChange={onHandleChange}  /><br/>
          Mobile: <input type="number" name="mobile"  value={formValues.mobile}    onChange={onHandleChange} /><br/>
              <button type="submit">Confirm</button><br/>
              <button onClick={closeModal}>close</button>
          </form>

            </Modal>
</>

          
    )
}

function Card2({memberDuration, memberInfo, memberPrice}) {
    return (
      <>

  <div class="w-3/4 my-4 max-h-150 p-5 rounded-md overflow-hidden shadow-lg flex justify-center">
 
  <div class="px-4 py-4">
    <div class="font-bold text-xl mb-2 p-3.5">{memberDuration}</div>

    <p class="text-gray-700 text-base p-2">
     About: {memberInfo}
    </p>
    <p class="text-gray-700 text-base p-2">Price: {memberPrice} ;- </p>
   
    <div class="px-6 pt-4 pb-2">
      <Link to="./form">
    <button class="flex justify-center text-indigo-500 px-4 py-3 bg-gray-300 rounded hover:bg-indigo-500 hover:text-white transition duration-200">
    Sign up
    </button>
    </Link>
  </div>
  </div>
  
</div>

      </>
    )
}

export {Card, Card2};