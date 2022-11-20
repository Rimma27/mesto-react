import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { api } from '../contexts/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    useEffect(() => {
        api.getInitialCards(cards)
            .then((data) => {
                const cards = data;
                setCards(cards);
            })
            .catch(err => console.log('Ошибка', err));
        api.getUserInfo()
            .then((data) => {
                setCurrentUser(data);
            })
            .catch(err => console.log('Ошибка', err));
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.setCardLike(card._id, isLiked)
            .then((newCard) => {
                setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
            })
            .catch(err => console.log('Ошибка при установке лайка', err));
    }
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((cards) => cards.filter((c) => c._id !== card._id));
            })
            .catch(err => console.log('Ошибка при удалении карточки', err));
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    }
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
        setIsImagePopupOpen(false);
    }

    function handleUpdateUser(currentUserUpdated) {
        api.setUserInfo(currentUserUpdated)
            .then((currentUserUpdated) => {
                setCurrentUser(currentUserUpdated);
                closeAllPopups();
            })
            .catch(err => console.log('Ошибка редактирования профиля', err));
    }

    function handleUpdateAvatar(link) {
        api.updateAvatar(link)
            .then((link) => {
                setCurrentUser(link);
                closeAllPopups();
            })
            .catch(err => console.log('Ошибка при обновлении аватара', err));
    }

    function handleAddPlace(newCard) {
        api.addCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch(err => console.log('Ошибка при добавлении карточки', err));
    }

    return (
        <div className='body'>
            <div className='page'>
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onEditAvatar={handleEditAvatarClick}
                        onCardClick={handleCardClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <Footer />
                    <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
                    <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
                    <AddPlacePopup onAddPlace={handleAddPlace} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
                    <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
                </CurrentUserContext.Provider>
            </div>
        </div>
    )
}
export default App;
