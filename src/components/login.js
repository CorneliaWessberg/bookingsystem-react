import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

//function som hanterar login, hämtar värden från databasen

function Login() {

  const intialValues = {
    email: "",
    password: ""
  }

  const [formValues, setFormValues] = useState(intialValues)
  const [jwt, setJwt] = useState("")
  const history = useHistory();
  const [error, setError] = useState("")


  function onChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  useEffect(() => {

    const JWT = localStorage.getItem("jwt")
    setJwt(JWT);

  }, []);

  function onSubmit(e) {
    e.preventDefault();

    axios.post('http://localhost:1337/auth/local', {
      identifier: formValues.email,
      password: formValues.password,
    })
      .then(response => {

        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);

        localStorage.setItem("jwt", response.data.jwt)
        localStorage.setItem("userId", response.data.user.id)
        localStorage.setItem("userEmail", response.data.user.email)
        localStorage.setItem("username", response.data.user.username)

        history.push("/cardlist")
        window.location.reload();



      })
      .catch((err) => {
        console.log(err)
        setError("Your informationen doesn't match any user, try again or register if you don't have an account :)")
      })
  }





  return (
    <>


      <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
        <div class="py-8 px-8 rounded-xl">
          <h1 class="font-medium text-2xl mt-3 text-center">Login</h1>
          <h1>{error}</h1>
          <form class="mt-6" onSubmit={onSubmit} method="POST" >
            <div class="my-5 text-sm">
              <label class="block text-black">E-mail</label>
              <input type="text" name="email" id="username" value={formValues.email} onChange={onChange} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="E-mail" />
            </div>
            <div class="my-5 text-sm">
              <label class="block text-black">Password</label>
              <input type="password" name="password" id="password" value={formValues.password} onChange={onChange} class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
              <div class="flex justify-end mt-2 text-xs text-gray-600">
                <Link to="/forgotPassword">Forget Password?</Link>
              </div>
            </div>

            <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
          </form>

          <div class="flex md:justify-between justify-center items-center mt-10">
            <div class="bg-gray-300 md:block hidden w-4/12"></div>
            <p class="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p>
            <div class="bg-gray-300 md:block hidden w-4/12"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-2 mt-7">
            <div>
              <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
            </div>
            <div>
              <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
            </div>
          </div>

          <p class="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <Link to="./registration" class="text-black font-medium"> Create One </Link>  </p>

        </div>
      </div>
    </>
  )
}


export default Login;