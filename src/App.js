// Routes.js
import React from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './LoginForm/SignUp.js';
import SignIn from './LoginForm/Signin.js';
import Phonesignin from './LoginForm/Phonesignin';
import Forgetpassword from './LoginForm/Forgetpassword.js';
import CreateProfile from './LoginForm/Creatp.js';
import HomePage from './HomePage.js'
import Courses from './Dashboard/Courses.js'
import Profile from './Dashboard/Profile.js';
import String from "./Dashboard/Strings.js"
import Pin from './Dashboard/Pin.js';
import Scan from './Dashboard/Scan.js'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/phonesignin" element={<Phonesignin />} />
                <Route path="/forgetpassword" element={<Forgetpassword />} />
                <Route path="/createprofile" element={<CreateProfile />} />
                <Route path="/Dashboard" element={<HomePage />} />
                <Route path="/Courses" element={<Courses />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/String" element={<String />} />
                <Route path="/Pin" element={<Pin />} />
                <Route path="/Scan" element={<Scan />} />

            </Routes>
        </Router>
    );
}
