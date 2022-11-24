import React from 'react';

function AuthForm({ title, valueEmail, valuePassword, submitTitle, onChangeEmail, onChangePassword, onSubmit }) {
    return (
        <div className="auth">
            <h2 className="auth__heading">{title}</h2>
            <form className="auth__form">
                <label>
                    <input value={valueEmail} className="auth__input" onChange={onChangeEmail} type="email" id="email-item" name="email" placeholder="Email" required />
                    <span className="auth__input-error email-item-error"></span>
                </label>
                <label>
                    <input value={valuePassword} className="auth__input" onChange={onChangePassword} type="password" id="password-item" name="password" placeholder="Пароль" required />
                    <span className="auth__input-error password-item-error"></span>
                </label>
            </form>
            <button type="submit" className="auth__submit" onSubmit={onSubmit}>{submitTitle}</button>
        </div>
    )
}
export default AuthForm;