import React from 'react';
import { Link } from "react-router-dom";

import './../styles/Navbar.css';
import logo from './../../images/logo.svg';

const Navbar = () => {

    return ( 
        <div className="Navbar">
            <div className="container-fluid">
                <Link to="/" className="Navbar__brand">
                    <img src={logo} alt="logo" className="Navbar__brand-logo" />
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>
            </div>
        </div>
    )

};

export default Navbar;