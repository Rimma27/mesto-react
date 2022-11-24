class AuthApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    _onResponce(res) {
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject('Ошибка', res.status)
        }
    }

    register() {
        return fetch(`${this._baseUrl}signup`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "password": "somepassword",
                    "email": "email@yandex.ru"
                })
            })
            .then(this._onResponce)
    }

    login() {
        return fetch(`${this._baseUrl}signin`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "password": "dsfsdfsdfsdf",
                    "email": "email@email.ru"
                })
            })
            .then(this._onResponce)
    }

    tokenCheck(token) {
        return fetch(`${this._baseUrl}/users/me`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization" : `Bearer ${token}`
                }
            })
            .then(this._onResponce)
    }
}

export const authApi = new AuthApi({
    baseUrl: 'https://auth.nomoreparties.co/'
})