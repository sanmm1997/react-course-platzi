import React from 'react';
import { Link } from "react-router-dom";

import './styles/BadgesList.css'
import Gravatar from "./Gravatar";

const BadgesListItem = ({id, firstName, lastName, twitter, jobTitle, avatarUrl, email}) => {

    return (
        <li className="Badge__item">
            <Gravatar email={email} />
            <div className="Badge__item-info">
                <span className="font-weight-bold">{firstName} {lastName}</span>
                <span className="twitter">{twitter}</span>
                <span className="font-weight-light">{jobTitle}</span>
                <div>
                    <Link
                        to={`/badges/${id}`}
                        className="btn btn-sm btn-outline-info py-1 px-2 mr-1"
                    >
                        Show
                    </Link>
                    <Link
                        to={`/badges/${id}/edit`}
                        className="btn btn-sm btn-outline-success py-1 px-2 ml-1"
                    >
                        Edit
                    </Link>
                </div>
            </div>
        </li>
    );

};

export default BadgesListItem;