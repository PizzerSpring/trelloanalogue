import React from 'react';
import axios from "axios";
import {BoardType} from "./boards-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "api-key": "93eba845-6be9-4bf8-97b3-22017ac3d646"
    }
});

type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

export const authApi = {
    me() {
        return instance.get<ResponseType<{data: LoginParamsType}>>('auth/me')
            .then(response => response.data)
    },
    log(data: LoginParamsType) {
        return instance.post<ResponseType<{userId?: number}>>('auth/login', data)
            .then(response => response.data)
    },
    logout() {
        return instance.delete<ResponseType>('auth/login')
    }
}

export const boardsApi = {
    createBoard(title: string) {
        return instance.post<ResponseType<{item: BoardType}>>('todo-lists', {title})
            .then(response => response.data)
    }
}