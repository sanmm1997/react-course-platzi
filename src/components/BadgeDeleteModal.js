import React from 'react';
import Modal from "./Modal";

const BadgeDeleteModal = ({ modalIsVisible, onModalIsVisible, onDeleteBadge }) => {

    return (
        <Modal
            modalIsVisible={modalIsVisible}
            onModalIsVisible={onModalIsVisible}
        >
            <div className="DeleteBadgeModal text-center">
                <h1>Are you sure?</h1>
                <p>You are about to delete this badge.</p>

                <div className="text-center">
                    <button className="btn btn-danger mr-4" onClick={onDeleteBadge}>Delete</button>
                    <button className="btn btn-primary" onClick={onModalIsVisible}>Cancel</button>
                </div>
            </div>
        </Modal>
    )

};

export default BadgeDeleteModal;