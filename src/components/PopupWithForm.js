import React from 'react';

function PopupWithForm({ name, title, children, isOpen, onClose, submitTitle }) {
    return (
            <div className={`popup popup-${name} ${isOpen ? 'popup-opened' : ''}`}>
                <div className="popup__container">
                    <h2 className="popup__heading">{title}</h2>
                    <form className="popup__form" name={`popup-${name}__form`} noValidate>
                        {children}
                    </form>
                    <button type="submit" className="popup__button popup__button_type_create">{submitTitle}</button>
                    <button onClick={onClose} type="button" className="popup__button popup__button_type_close"></button>
                </div>
            </div>
    )
}
export default PopupWithForm;