import {authApi, boardsApi, LoginParamsType} from "./api";
import {setLogin} from "./auth-reducer";
import {Dispatch} from "redux";
import {boardCreate} from "./boards-reducer";

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

export const createBoard = (title: string) => {
    return (dispatch: Dispatch) => {
        boardsApi.createBoard(title)
            .then((data) => {
                const board = data.data.item;
                dispatch(boardCreate(board));
            })
    }
}