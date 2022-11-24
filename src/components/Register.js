import { useState } from "react";
import AuthForm from "./AuthForm";

function Register () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleChangePassword(e) {
        setPassword(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <AuthForm title={'Регистрация'} valueEmail={email || ''} valuePassword={password || ''} submitTitle={'Зарегистрироваться'}
            onChangeEmail={handleChangeEmail} onChangePassword={handleChangePassword} onSubmit={handleSubmit} />

    )
}

export default Register;