import React from 'react';
import './styles/Error.css';

const Error = ({ error }) => {

    return (
        <div className="PageError">
            { error.message }
        </div>
    );

};

export default Error;

