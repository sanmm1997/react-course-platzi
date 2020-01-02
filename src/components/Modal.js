import React from 'react';
import {createPortal} from 'react-dom';

import './styles/Modal.css';

const Modal = ({ modalIsVisible, onModalIsVisible, children }) => {
    return (
        modalIsVisible
        ?
            createPortal(
                <div className="Modal">
                    <div className="Modal__container">
                        <button onClick={onModalIsVisible} className="Modal__close-button">
                            X
                        </button>
                        { children }
                    </div>
                </div>,
                document.getElementById('modal')
            )
        :
            null
    )
};

export default Modal;