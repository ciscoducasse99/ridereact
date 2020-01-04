import React from 'react';

import './Modal.css';

const Modal = (props) => {
    
    
    const {message} = props;
    const modal_message = message ? <p>can ride</p> : <p>can not ride</p>;
    
    return (
        <div className="modal-dialog">
            <div className="modal-content"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-50vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header pb-3">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    {modal_message}
                </div>
                <div className="modal-footer pt-3">
                    <button className="btn btn-secondary" onClick={props.close}>CLOSE</button>
                    <button className="btn btn-primary">CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;