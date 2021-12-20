import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this) //слежка за изменениями
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }

    //вызываются в том случае, если переменная была изменена
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}