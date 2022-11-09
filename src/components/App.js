import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');

    const handleCardClick = (card) => {
        setSelectedCard(card);
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
        setSelectedCard(false);
    }

    return (
        <body className='body'>
            <div className='page'>
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />
                <Footer />

                <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                    <label>
                        <input type="text" id="name-item" name="name" className="popup__item popup__item_type_name"
                            placeholder="Имя" required minlength="2" maxlength="40" />
                        <span className="popup__item-error name-item-error"></span>
                    </label>
                    <label>
                        <input type="text" id="job-item" name="job" className="popup__item popup__item_type_job"
                            placeholder="Сфера деятельности" required minlength="2" maxlength="200" />
                        <span className="popup__item-error job-item-error"></span>
                    </label>
                    <button type="submit" className="popup__button popup__button_type_create">Сохранить</button>`
                </PopupWithForm>


                <PopupWithForm name={'add'} title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                    <label>
                        <input type="text" id="title-item" name="name" className="popup__item popup__item_type_title"
                            placeholder="Название" minlength="2" maxlength="30" required />
                        <span className="popup__item-error title-item-error"></span>
                    </label>
                    <label>
                        <input type="url" id="place-item" name="link" className="popup__item popup__item_type_place"
                            placeholder="Ссылка на картинку" required />
                        <span className="popup__item-error place-item-error"></span>
                    </label>
                    <button type="submit" className="popup__button popup__button_type_create" disabled>Создать</button>`
                </PopupWithForm>

                <PopupWithForm name={'update-avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                    `<label>
                        <input type="url" id="avatar" name="link" className="popup__item popup__item_type_place"
                            placeholder="Ссылка на фотографию" required />
                        <span className="popup__item-error avatar-error"></span>
                    </label>
                    <button type="submit" className="popup__button popup__button_type_create" disabled>Сохранить</button>`
                </PopupWithForm>

                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>


            </div>
        </body>
    )
}

export default App;
