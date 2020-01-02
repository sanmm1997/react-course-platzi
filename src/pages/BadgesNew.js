import React, { useState, Fragment } from 'react';
import './styles/BadgeNew.css'

import Header from "../components/layout/Header";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../apis/api";
import Loading from "../components/Loading";


const BadgesNew = ({ history }) => {

    const [people, setPeople] = useState({
        email: '',
        twitter: '',
        jobTitle: '',
        lastName: '',
        firstName: '',
        avatarUrl: 'https://www.gravatar.com/avatar/652b25c33dd92c94c041bd048bae6470?d=identicon'
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setPeople({
            ...people,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await api.badges.create(people);
            history.push('/badges');
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Fragment>
            <Header/>
            <div className="container">
                {
                    loading
                    ?
                        <Loading/>
                    :
                        <div className="row">
                            <div className="col-m-sm-10 col-md-6">
                                <Badge { ...people }/>
                            </div>
                            <div className="col-m-sm-10 col-md-6 pt-5 pt-sm-0">
                                <h1>New Attendant</h1>
                                <BadgeForm
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    people={people}
                                    error={error}
                                />
                            </div>
                        </div>
                }
            </div>
        </Fragment>
    )

};

export default BadgesNew;