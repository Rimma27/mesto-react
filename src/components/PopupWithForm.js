import React from 'react';


function PopupWithForm({ name, title, children, isOpen, onClose }) {
    return (
            <div className={`popup popup-${name} ${isOpen ? 'popup-opened' : ''}`}>
                <div className="popup__container">
                    <h2 className="popup__heading">{title}</h2>
                    <form className="popup__form" name={`popup-${name}__form`} noValidate>
                        {children}
                    </form>
                    <button onClick={onClose} type="button" className="popup__button popup__button_type_close"></button>
                </div>
            </div>
    )
}

export default PopupWithForm;


            // <div className="popup popup-profile">
            //     <div className="popup__container">
            //         <h2 className="popup__heading">Редактировать профиль</h2>
            //         <form className="popup__form" name="popup-profile__form" noValidate>
            //             <label>
            //                 <input type="text" id="name-item" name="name" className="popup__item popup__item_type_name"
            //                     placeholder="Имя" required minlength="2" maxlength="40" />
            //                 <span className="popup__item-error name-item-error"></span>
            //             </label>
            //             <label>
            //                 <input type="text" id="job-item" name="job" className="popup__item popup__item_type_job"
            //                     placeholder="Сфера деятельности" required minlength="2" maxlength="200" />
            //                 <span className="popup__item-error job-item-error"></span>
            //             </label>
            //             <button type="submit" className="popup__button popup__button_type_create">Сохранить</button>
            //         </form>
            //         <button type="button" className="popup__button popup__button_type_close"></button>
            //     </div>
            // </div>

            // <div className="popup popup-add">
            //     <div className="popup__container">
            //         <h2 className="popup__heading">Новое место</h2>
            //         <form className="popup__form" name="popup-add__form" noValidate>
            //             <label>
            //                 <input type="text" id="title-item" name="name" className="popup__item popup__item_type_title"
            //                     placeholder="Название" minlength="2" maxlength="30" required />
            //                 <span className="popup__item-error title-item-error"></span>
            //             </label>
            //             <label>
            //                 <input type="url" id="place-item" name="link" className="popup__item popup__item_type_place"
            //                     placeholder="Ссылка на картинку" required />
            //                 <span className="popup__item-error place-item-error"></span>
            //             </label>
            //             <button type="submit" className="popup__button popup__button_type_create" disabled>Создать</button>
            //         </form>
            //         <button type="button" className="popup__button popup__button_type_close"></button>
            //     </div>
            // </div>

            // <div className="popup popup-update-avatar">
            //     <div className="popup__container">
            //         <h2 className="popup__heading">Обновить аватар</h2>
            //         <form className="popup__form" name="popup-update-avatar__form" noValidate>
            //             <label>
            //                 <input type="url" id="avatar" name="link" className="popup__item popup__item_type_place"
            //                     placeholder="Ссылка на фотографию" required />
            //                 <span className="popup__item-error avatar-error"></span>
            //             </label>
            //             <button type="submit" className="popup__button popup__button_type_create" disabled>Сохранить</button>
            //         </form>
            //         <button type="button" className="popup__button popup__button_type_close"></button>
            //     </div>
            // </div>

            // <div className="popup popup-delete">
            //     <div className="popup__container">
            //         <h2 className="popup__heading">Вы уверены?</h2>
            //         <form className="popup__form" name="popup-delete__form" noValidate>
            //             <button type="submit" className="popup__button popup__button_type_save">Да</button>
            //         </form>
            //         <button type="button" className="popup__button popup__button_type_close"></button>
            //     </div>
            // </div>