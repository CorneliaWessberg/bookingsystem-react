import React, {useState} from 'react';
import firestore from './firebaseConfig';



function FirebaseForm() {

    const initalValues = {
        name: "",
        age:  "",
        country: "" 
    }

    const [addValues, setAddValues] = useState(initalValues);

    function onChange(e) {
         
        setAddValues({ ...addValues, [e.target.name]: e.target.value });
        console.log(addValues)
    }
    
  async  function onSubmit(e){
        e.preventDefault();

    const res=  await firestore.collection("corni").add({
            name: addValues.name,
            age: Number(addValues.age),
            country: addValues.country
        })

        console.log(res)
       /*  .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            console.log("Document written with ID: ", docRef);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        }); */
    }

    return (
      <>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10 px-6 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <h1 className="justify-center font-bold text-3xl"> Add Firebase data </h1>
            <form  className="mt-8 space-y-6" onSubmit={onSubmit}>


              <div>
                <label for="email-address" className="sr-only">Class Name </label>
                <input id="email-address" value={addValues.name} onChange={onChange} name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
              </div>


              <div>
                <label for="email-address" className="sr-only">Class time</label>
                <input id="email-address" value={addValues.age} onChange={onChange} name="age" type="number" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Age" />
              </div>

              <div>
                <label for="email-address" className="sr-only">Class instructor </label>
                <input id="email-address" value={addValues.country} onChange={onChange} name="country" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Country" />
              </div>

              


              <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-gray-800 px-4 py-3 bg-gray-300 rounded hover:bg-gray-800 hover:text-white transition duration-200 mt-12">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
          Write Firebase data
        </button>

            </form>

          </div>
        </div>
      
      </>  
    )
}

export default FirebaseForm;
