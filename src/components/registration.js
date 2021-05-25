import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import Login from "./login";
import axios from "axios";


function Registration() {

     const intialValues = {
        username:"",
        email:"",
        password:""
    }

    const [regValues, setRegValues] = useState(intialValues)
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("")
    const history = useHistory();
    

    function onChange(e) {
        setRegValues({
          ...regValues,
            [e.target.name]: e.target.value,
        });

    }

    function onSubmit(e) {
    e.preventDefault(); 

         //strapi? för API och kunna registrera användaren. Glöm inte bocka i alla saker i inställningar
        

           const response = axios.post('http://localhost:1337/auth/local/register', {
                username: regValues.username,
                email: regValues.email,
                password: regValues.password,

            })

            .then( (e)=> {  
                
                if(e.data.user) 
                setLoggedIn(true)
            
    })
         .catch((err)=> {setError(err.response.data.message[0].messages[0].message)}) 

         console.log(response)
    }
        
        const loginUser = async()=> {
            const res = await axios.post('', {
                identifier: '',
                password: '',
            })
           
            console.log(res)
        }

  



    









    return (
        <>
        {loggedIn ?

<div class="flex ">
<div class="m-8 w-screen bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
      <div id="header" class="flex">
         <div id="body" class="flex flex-col ml-5">
            <p id="job" class="text-gray-800 mt-2 font-bold text-3xl ">You are now registratet!</p>
            <Link to="/login"><button class="flex justify-center text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12"> To login
            </button></Link>
            <div class="flex mt-5">
               </div>
         </div>
      </div>
   </div>
  </div>
            
            :<div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div class="py-8 px-8 rounded-xl">
                    <h1 class="font-medium text-2xl mt-3 text-center">Register here</h1>
                    <form action="" class="mt-6" onSubmit={onSubmit}>
                        <div class="my-5 text-sm">
                            <label for="username" class="block text-black">Username:</label>
                            <input type="text" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username"
                             value={regValues.username}
                             name="username"
                             onChange={onChange}
                             placeholder="username" />
                        </div>
                        <div class="my-5 text-sm">
                            <label for="username" class="block text-black">E-mail:</label>
                            <input type="text" autofocus id="email" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" 
                            value={regValues.email}
                            name="email"
                            onChange={onChange}
                            placeholder="E-mail"/>
                        </div>
                        <div class="my-5 text-sm">
                            <label for="password" class="block text-black">Password:</label>
                            <input type="password" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password"
                             value={regValues.password}
                             name="password"
                             onChange={onChange}
                             placeholder="password" />
                            <div class="flex justify-end mt-2 text-xs text-gray-600">
                            </div>
                        </div>
    
                        <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Register</button>
                    </form>
    
                     </div>
            </div>
}</>
       
        )
}

export default Registration;