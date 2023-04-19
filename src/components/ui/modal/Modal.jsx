import React from 'react';
import cl from './Modal.module.css';
import { CgClose } from 'react-icons/cg';

const Modal = ({children, visible, onClose, title}) => {

    const rootClasses = [cl.Modal]
    if (visible) {
        rootClasses.push(cl.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={onClose}>
            <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
                <div className={cl.Title}>
                    <h4>{title}</h4>
                    <div onClick={onClose}>
                        <CgClose className='icon'/>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;