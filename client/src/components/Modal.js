import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
const Modal = ({ children, modalState, eventOnSubmit }) => {
    if(!modalState) {
        return null;
    }
    
    let [childrenHeader, childrenBody, childrenFooter] = children;
    
    return (
        <form onSubmit={eventOnSubmit}>
            <div className="modal is-active" id="modal">
                <div className="modal-card">
                    <header className="modal-card-head">
                        {childrenHeader}
                    </header>
                    <section className="modal-card-body">
                        {childrenBody}
                    </section>
                    <footer className="modal-card-foot pull-right">
                        {childrenFooter}
                    </footer>
                </div>
            </div>
        </form>
    );
}

Modal.propTypes = {
    modalState: PropTypes.bool.isRequired,
}

export default Modal; 