import React, {useState} from 'react';
import axios from "axios"; 
import {useHistory, Link} from "react-router-dom";

function AddCLass() {

    const initalValues = {
        name : "",
        time : "", 
        description : "", 
        duration : ""

    }


    const [addClassValues, setAddClassValues] = useState(initalValues)
    const [fileData, setFileData] = useState();
    const history = useHistory();
    const [success, setSuccess] = useState(false);
    


    function onChange(e) {
        setAddClassValues({...addClassValues, [e.target.name]:e.target.value});
        console.log(addClassValues)
    }

    function onChangeImg(e) {
      setFileData(e.target.files[0])
  }

    function onSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:1337/products", {
         name:addClassValues.name, 
         time:addClassValues.time,
         description:addClassValues.description,
         duration: addClassValues.duration,

    }).then( (res)=> {
     
      console.log(res.data)

      const data = new FormData();
      
      data.append("files" , fileData)
      data.append("ref", "product")
      data.append("refId", res.data.id)
      data.append("field", "img")

      axios.post("http://localhost:1337/upload",  data)
        .then( (image)=> console.log(image))
        .catch( (error)=> console.log(error))

     }).catch(  (err)=> {
            console.log(err)

    })
    setSuccess(true)
     /* history.push("/cardlist")
      window.location.reload() */
  }
    return (
        <>
{success ? <div class="h-screen"> Your class was sucessfully uploaded, go to <strong><Link to="/cardlist">CLASSES</Link></strong> </div>
:<div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-6 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <h1 className="justify-center font-bold text-3xl"> Add the classes you wish here</h1>
            <form  method="post" className="mt-8 space-y-6" onSubmit={onSubmit}>
               

        <div>
          <label for="email-address" className="sr-only">Class Name </label>
          <input id="email-address"  value={addClassValues.name} onChange={onChange}   name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
        </div>
         

        <div>
          <label for="email-address" className="sr-only">Class Description </label>
          <input id="email-address" value={addClassValues.time} onChange={onChange}  name="time" type="number" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Time"/>
        </div>

        <div>
          <label for="email-address" className="sr-only">Class instructor </label>
          <input id="email-address" value={addClassValues.description} onChange={onChange}  name="description" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Description"/>
        </div>

        <div>
          <label for="email-address" className="sr-only">Class time</label>
          <input id="email-address" value={addClassValues.duration} onChange={onChange}  name="duration" type="number" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Duration"/>
        </div>


       <input type="file" name="file" id="" onChange={onChangeImg}/>

  
     <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12">  
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">  
          </span>
          Add class
        </button> 
            
            </form>

            </div>
        </div>

}</>
    )
}

export default AddCLass;