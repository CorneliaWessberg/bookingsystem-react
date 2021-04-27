import React from "react";
import Menu from "./menu";
import CardList from "./cardList";
import Form from "./form";
import Login from "./login";
import Bookings from "./bookings";
import MemberShipsList from "./memberships";

import {Route, BrowserRouter as Router} from "react-router-dom";


export default function RouteApp() {
    return (
        <>
            <Router>
                <Menu />

                <Route path="/" exact component={CardList} />
                <Route path="/memberships" component={MemberShipsList} />
                <Route path="/form" component={Form} />
                <Route path="/login" component={Login} />
                <Route path="/bookings" component={Bookings} />
                
                
            </Router> 

            
        </>
    )
}