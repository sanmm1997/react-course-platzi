import React, { Fragment } from 'react';
import {Link} from "react-router-dom";


import './styles/BadgeDetailsContainer.css'

import Header from "../components/layout/Header";
import Badge from "../components/Badge";
import Loading from "../components/Loading";
import BadgeDeleteModal from "../components/BadgeDeleteModal";


const BadgesDetails = ({ loading, people, onModalIsVisible, modalIsVisible, onDeleteBadge }) => {

    return (
        <Fragment>
            <Header/>
            <div className="container">
                {
                loading
                ?
                <Loading/>
                :
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-5">
                        <Badge {...people}/>
                    </div>
                    <div className="col-sm-10 col-md-5">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link to={`/badges/${people.id}/edit`} className="btn btn-primary mb-4">Edit</Link>
                            </div>
                            <div>
                                <button className="btn btn-danger mb-4" onClick={onModalIsVisible}>Delete</button>
                                <BadgeDeleteModal
                                    modalIsVisible={modalIsVisible}
                                    onModalIsVisible={onModalIsVisible}
                                    onDeleteBadge={onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        </Fragment>
    )

};

export default BadgesDetails;