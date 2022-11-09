import React from "react";

function Card({ card, key, name, countLikes, image, onCardClick }) {

    return (
        <article className="element" key={key}>
            <button type="button" className="element__basket"></button>
            <button onClick={() => onCardClick(card)} type="button" className="element__button-image"><img className="element__image" src={image} /></button>
            <div className="element__group">
                <h3 className="element__title">{name}</h3>
                <button type="button" className="element__like"></button>
            </div>
            <div className="element__likes">{countLikes}</div>
        </article>
    )
}

export default Card;
