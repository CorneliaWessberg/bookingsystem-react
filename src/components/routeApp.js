import React from "react";
import Homepage from "./homepage";
import Menu from "./menu";
import CardList from "./cardList";
import Form from "./form";
import Login from "./login";
import Bookings from "./bookings";
import MemberShipsList from "./memberships";
import Registration from "./registration";

import {Route, BrowserRouter as Router} from "react-router-dom";
import Footer from "./footer";
import AddCLass from "./addClass";



export default function RouteApp() {
    return (
        <>
            <Router>
                <Menu />
                
                <Route path="/" exact component={Homepage} />
                <Route path="/addClass" component={AddCLass} />
                <Route path="/cardlist" component={CardList} />
                <Route path="/memberships" component={MemberShipsList} />
                <Route path="/form" component={Form} />
                <Route path="/login" component={Login} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/registration" component={Registration} />

                <Footer/>
                
            </Router> 

            
        </>
    )
}