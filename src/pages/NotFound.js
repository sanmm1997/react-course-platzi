import React from 'react';
import { Link } from "react-router-dom";
import './styles/NotFound.css';

const NotFound = () => {
    return(
        <div className="NotFound__container container-fluid">
            <div className="row py-5">
                <div className="col text-center">
                    <h1 className="text-center text-white">Page not found</h1>
                    <Link to="/" className="btn btn-primary">Go to home page</Link>
                </div>
            </div>
        </div>
    )
};

export default NotFound;