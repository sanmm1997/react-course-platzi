import React from 'react';
import { Link } from "react-router-dom";
import header from './../../images/platziconf-logo.svg';

const Header = () => {

    return ( 
        <div className="BadgeNew__hero">
            <Link to="/">
                <img src={header} className="img-fluid BadgeNew__hero-image" alt="Header"/>
            </Link>
        </div>
    )

};

export default Header;