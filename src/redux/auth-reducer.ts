
export type AuthActionsTypes = ReturnType<typeof setLogin>

type initialStateType = {
    isLoggedIn: boolean
}

const initialState: initialStateType = {
    isLoggedIn: false
}


export const authReducer = (state: initialStateType = initialState, action: AuthActionsTypes): initialStateType => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, isLoggedIn: action.value};
        }
        default: {
            return state
        }

    }

}

export const setLogin = (value: boolean) => ({type: 'LOGIN', value} as const)