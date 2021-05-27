import React from "react"; 
import {useHistory} from "react-router-dom"; 

//Function för att logga ut användare

function Logout() {

    const history = useHistory(); 

    //När de klickar på knappen loggout
    function logoutUser(e) {
        localStorage.clear()
        history.push("./login")
        window.location.reload()
    }

    //Om de inte vill logga ut blir de skickade tillbaka till alla classes när de klickar på knappen
    function toProducts(e) {
        history.push("/")
        window.location.reload()
    }


return (
    <>
    <div class="h-screen">
    <div class="bg-white mt-44 lg:w-6/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div class="py-8 px-8 rounded-xl">
                    <h1 class="font-medium text-2xl mt-3 text-center">Thanks for today!</h1>
                        <div class="my-5 text-sm">
                            <h1 class="text-xl font-semibold mb-2 text-center">Not feeling done yet?</h1>
                           <button onClick={toProducts} class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Back to Homepage</button>
                        </div>
                        <div class="my-5 text-sm">
                            <h1 class="text-xl font-semibold mb-2 text-center" >Done for today?</h1>
                            <button onClick={logoutUser} class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Loggout</button>
                        </div>
                    
    
                     </div>
            </div>
    

            </div> </>
)
}
export default Logout; 