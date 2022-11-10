import React from 'react';
import { api } from '../utils/Api';
import logo from '../images/image.svg';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState(logo);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo(userName, userDescription, userAvatar)
            .then((data) => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar);
            })

        api.getInitialCards(cards)
            .then((data) => {
                const cards = data;
                setCards(cards);
            })
    },[])

    return (
        <main className="content">
            <section className="profile">
                <button onClick={onEditAvatar} type="button" className="profile__edit-avatar-button">
                    <img src={`${userAvatar}`} className="profile__avatar" alt="Ваша фотография" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <button onClick={onEditProfile} type="button" className="profile__edit-button" aria-label="Редактировать"></button>
                    <h2 className="profile__subtitle">{userDescription}</h2>
                </div>
                <button onClick={onAddPlace} type="button" className="profile__add-button" aria-label="Добавить"></button>
            </section>
            <section className="elements">

                {cards.map((card) => (
                    
                    <Card
                        card={card}
                        key={card._id}
                        name={card.name}
                        countLikes={card.likes.length}
                        image={card.link}
                        onCardClick={onCardClick}
                    />)
                )}

            </section>
        </main>
    )
};

export default Main;