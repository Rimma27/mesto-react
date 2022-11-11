import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

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

    return (
        <div className='body'>
            <div className='page'>
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer />

                <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitTitle={'Сохранить'}>
                    <label>
                        <input type="text" id="name-item" name="name" className="popup__item popup__item_type_name"
                            placeholder="Имя" required minLength="2" maxLength="40" />
                        <span className="popup__item-error name-item-error"></span>
                    </label>
                    <label>
                        <input type="text" id="job-item" name="job" className="popup__item popup__item_type_job"
                            placeholder="Сфера деятельности" required minLength="2" maxLength="200" />
                        <span className="popup__item-error job-item-error"></span>
                    </label>`
                </PopupWithForm>

                <PopupWithForm name={'add'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitTitle={'Создать'}>
                    <label>
                        <input type="text" id="title-item" name="name" className="popup__item popup__item_type_title"
                            placeholder="Название" minLength="2" maxLength="30" required />
                        <span className="popup__item-error title-item-error"></span>
                    </label>
                    <label>
                        <input type="url" id="place-item" name="link" className="popup__item popup__item_type_place"
                            placeholder="Ссылка на картинку" required />
                        <span className="popup__item-error place-item-error"></span>
                    </label>`
                </PopupWithForm>

                <PopupWithForm name={'update-avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitTitle={'Сохранить'}>
                    `<label>
                        <input type="url" id="avatar" name="link" className="popup__item popup__item_type_place"
                            placeholder="Ссылка на фотографию" required />
                        <span className="popup__item-error avatar-error"></span>
                    </label>`
                </PopupWithForm>

                <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
            </div>
        </div>
    )
}
export default App;
