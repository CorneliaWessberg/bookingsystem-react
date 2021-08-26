import React from 'react'


const Context = createContext({
    authenticated: false, // to check if authenticated or not
    user: {}, // store all the user details
    accessToken: "", // accessToken of user for Auth0
    initiateLogin: () => {}, // to start the login process
    handleAuthentication: () => {}, // handle Auth0 login process
    logout: () => {} // logout the user
   })

function ContextAuth() {


    return (
        <></>
    )
}

export default ContextAuth
