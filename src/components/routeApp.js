import React from "react";
import Homepage from "./homepage";
import Menu from "./menu";
import CardList from "./cardList";
import Login from "./login";
import Bookings from "./bookings";
import MemberShipsList from "./memberships";
import Registration from "./registration";
import Logout from "./logout";
import Footer from "./footer";
import AddCLass from "./addClass";
import ForgotPassword from "./forgotPassword";
import Dashboard from "./adminDashboard";
import Membership from "./membership";
import FirebaseForm from "./firebaseForm";
import Profile from "./Profile";
import GetFirebaseData from "./readFirebase";
import ContactForm from "./contactForm";
import FirebaseDatainput from "./firebaseDatainput"

import { Route, BrowserRouter as Router } from "react-router-dom";





export default function RouteApp() {
    return (
        <>
            <Router>
                <Menu />

                <Route path="/" exact component={Homepage} />
                <Route path="/addClass" component={AddCLass} />
                <Route path="/cardlist" component={CardList} />
                <Route path="/memberships" component={MemberShipsList} />
                <Route path="/login" component={Login} />
                <Route path="/bookings" component={Bookings} />
                <Route path="/registration" component={Registration} />
                <Route path="/logout" component={Logout} />
                <Route path="/forgotPassword" component={ForgotPassword} />
                <Route path="/adminDashboard" component={Dashboard}/>
                <Route path="/membership" component={Membership}/>
                <Route path="/firebaseForm" component={FirebaseForm}/>
                <Route path="/Profile" component={Profile}/>
                <Route path="/readFirebase" component={GetFirebaseData}/>
                <Route path="/contactForm" component={ContactForm}/>
                <Route path="/firebaseDatainput" component={FirebaseDatainput}/>
                <Footer />

            </Router>


        </>
    )
}