import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './styles/Badges.css'
import confLogo from './../images/badge-header.svg'


import api from "../apis/api";
import BadgesList from "../components/BadgesList";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Badges = () => {

    const [badges, setBadges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fecthBadges();
    }, []);

    const fecthBadges = async () => {
      setLoading(true);
      setError(null);

      try {
          const data = await api.badges.list();
          setBadges(data);
      } catch (e) {
          setError(e);
      } finally {
          setLoading(false);
      }
    };

    const componentShow = () => {
        if (loading)
            return <Loading/>;
        else if (error)
            return <Error error={error}/>;

        return <BadgesList badges={badges}/>;
    };


    return (
        <div>
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img src={ confLogo } alt="" className="Badges_conf-logo"/>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new"  className="btn btn-primary">New Badge</Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            { componentShow() }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

};

export default Badges;