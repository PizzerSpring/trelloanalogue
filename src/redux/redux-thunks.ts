import {authApi, LoginParamsType} from "./api";
import {setLogin} from "./auth-reducer";
import {Dispatch} from "redux";

export const login = (data: LoginParamsType) => {
    return (dispatch: Dispatch) => {
        authApi.log(data)
            .then((data) => {
                dispatch(setLogin(true));
                if (data.resultCode === 0) {
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authApi.logout()
            .then(() => {
                dispatch(setLogin(false));
            })
    }
}