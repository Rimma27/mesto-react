import { useState } from "react";
import AuthForm from "./AuthForm.js";

function Login() {
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
        <AuthForm title={'Вход'} valueEmail={email || ''} valuePassword={password || ''} submitTitle={'Войти'}
            onChangeEmail={handleChangeEmail} onChangePassword={handleChangePassword} onSubmit={handleSubmit} />

    )
}

export default Login;
