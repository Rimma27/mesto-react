import React from "react";
import AuthPopup from "./AuthPopup";
import logo from '../images/success.svg';

function AuthSuccessPopup({isOpen, onClose}) {
return (
<AuthPopup imgName={"Success"} img={logo} title={"Вы успешно зарегистрировались!"} isOpen={isOpen} onClose={onClose} />
)
}

export default AuthSuccessPopup;