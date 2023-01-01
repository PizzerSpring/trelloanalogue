import {authApi, boardsApi, LoginParamsType} from "./api";
import {setLogin} from "./auth-reducer";
import {Dispatch} from "redux";
import {boardCreate, BoardsActionsTypes, setBoards} from "./boards-reducer";
import {Simulate} from "react-dom/test-utils";
import seeked = Simulate.seeked;
import {ThunkDispatch} from "redux-thunk";
import {RootStateType} from "./store";

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

export const getBoards = () => {
    return (dispatch: Dispatch) => {
        boardsApi.getBoards()
            .then((data) => {
                dispatch(setBoards(data))
            })
    }
}

export const deleteBoard = (boardId: string) => {
    return (dispatch: ThunkDispatch<RootStateType, typeof boardId, BoardsActionsTypes>) => {
        boardsApi.deleteBoard(boardId)
            .then(() => {
                dispatch(deleteBoard(boardId))
            })
    }
}