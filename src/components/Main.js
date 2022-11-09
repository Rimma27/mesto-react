import React from 'react';

function Main({onEditProfile, onAddPlace, onEditAvatar}) {
    return (
        <main className="content">
            <section className="profile">
                <button onClick={onEditAvatar} type="button" className="profile__edit-avatar-button">
                    <img src="<%=require('./images/image.svg')%>" className="profile__avatar" alt="Ваша фотография" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать"></button>
                    <h2 className="profile__subtitle">Исследователь океана</h2>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить"></button>
            </section>
            <section className="elements">
                <template id="element-template" className="element-template">
                    <article className="element">
                        <button type="button" className="element__basket"></button>
                        <button type="button" className="element__button-image"><img className="element__image" /></button>
                        <div className="element__group">
                            <h3 className="element__title"></h3>
                            <button type="button" className="element__like"></button>
                        </div>
                        <div className="element__likes"></div>
                    </article>
                </template>
            </section>
        </main>
    )
};

export default Main;