import React, { useState, useEffect } from 'react';

import api from "../apis/api";
import './styles/BadgeDetailsContainer.css'

import BadgesDetails from "./BadgeDetails";


const BadgesDetailsContainer = ({ history, match }) => {

    const [people, setPeople] = useState({
        email: '',
        twitter: '',
        jobTitle: '',
        lastName: '',
        firstName: '',
        avatarUrl: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const fetchPeople = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await api.badges.read(match.params.id);
            setPeople(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const onModalIsVisible = () => {
        setModalIsVisible(!modalIsVisible);
    };

    const onDeleteBadge = async () => {
        setLoading(true);
        setError(null);
        try {
            await api.badges.remove(match.params.id);
            history.push('/badges');
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPeople();
    }, []);

    return (
        <BadgesDetails
            loading={loading}
            modalIsVisible={modalIsVisible}
            onModalIsVisible={onModalIsVisible}
            people={people}
            error={error}
            onDeleteBadge={onDeleteBadge}
        />
    )

};

export default BadgesDetailsContainer;