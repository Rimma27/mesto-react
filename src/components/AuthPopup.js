import React from "react";

function AuthPopup({ imgName, img, title }) {
    return (
        <div className="popup auth-popup">
            <div className="popup__container">
                <img src={img} className="auth-popup__logo" alt={imgName} />
                <h2 className="auth-popup__title">{title}</h2>
                <button type="button" className="popup__button_type_close"></button>
            </div>
        </div>
    )
}

export default AuthPopup;