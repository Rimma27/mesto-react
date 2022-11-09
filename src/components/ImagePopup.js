import React from "react";

function ImagePopup({card, onClose}) {

    return (
    <div className={`popup popup-photo ${card ? 'popup-opened' : ''}`}>
        <div className="popup-photo__container">
            <button onClick={onClose} type="button" className="popup__button popup__button_type_close"></button>
            <img src={card ? card.link : ''} className="popup-photo__image" alt="Фото" />
            <p className="popup-photo__name">{card.name}</p>
        </div>
    </div>
    )
}

export default ImagePopup;