import React from "react";
import AuthPopup from "./AuthPopup";
import logo from '../images/error.svg';

function AuthErrorPopup({isOpen, onClose}) {
return (
<AuthPopup imgName={"Error"} img={logo} title={"Что-то пошло не так! Попробуйте ещё раз."} isOpen={isOpen} onClose={onClose} />
)
}

export default AuthErrorPopup;