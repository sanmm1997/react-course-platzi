import React from 'react';
import { Link } from "react-router-dom";
import './styles/Home.css';
import astronauts from './../images/astronauts.svg';
import platziConfLogo from './../images/platziconf-logo.svg';

const Home = () => {
    return (
        <div className="Container__home d-flex flex-lg-row flex-column align-items-center justify-content-center">
            <div className="Container__home-logo">
                <img src={platziConfLogo} className="img-fluid" alt="Platzi conf"/>
                <div className="Container__home-text py-5 text-center">
                    <Link to="/badges" className="btn btn-primary">Bagdes</Link>
                </div>
            </div>
            <div className="">
                <img src={astronauts} className="img-fluid" alt="Astronauts"/>
            </div>
        </div>
    )
};

export default Home;