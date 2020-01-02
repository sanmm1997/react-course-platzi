import React, { Fragment } from 'react';
import './styles/BadgesList.css'
import BadgesListItem from "./BadgesListItem";

const BadgesList = ({ badges }) => {

    return (
        badges.length === 0
        ?
        <Fragment>
            <h3 className="text-center">No badges were found</h3>
        </Fragment>
        :
        <ul className="list-unstyled">
            { badges.map((badge) => <BadgesListItem key={badge.id} {...badge} /> )}
        </ul>
    );

};

export default BadgesList;