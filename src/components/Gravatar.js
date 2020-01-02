import React from 'react';
import md5 from 'md5';



const Gravatar = ({ email, className }) => {

    const hashEmail = md5(email);

    return (
        <img src={`https://www.gravatar.com/avatar/${hashEmail}?d=identicon`} className={className}  alt=""/>
    )

};

export default Gravatar;