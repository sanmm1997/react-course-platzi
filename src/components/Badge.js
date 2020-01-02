import React from 'react';

import confLogo from './../images/badge-header.svg';
import './styles/Badge.css';
import Gravatar from "./Gravatar";

const Badge = ({ firstName, lastName, jobTitle, twitter, avatarUrl, email }) => {
    return (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Conf logo"/>
            </div>

            <div className="Badge__section-name">
                <Gravatar
                    email={email}
                    className="Badge__avatar"
                />
                <h1>{ firstName || 'First name' } <br/> { lastName || 'Last name' }</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{ jobTitle || 'Job iitle' }</h3>
                <div>@{ twitter || 'Twitter' }</div>
            </div>

            <div className="Badge__footer">
                #platziconf
            </div>
        </div>
    );
}

export default Badge;
