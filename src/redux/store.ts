import {combineReducers, createStore, applyMiddleware} from 'redux';
import {AuthActionsTypes, authReducer} from "./auth-reducer";
import {useDispatch} from "react-redux";
import thunkMiddleWare, {ThunkDispatch} from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppStoreActionsType =  AuthActionsTypes;
type TypedDispatch = ThunkDispatch<RootStateType, any, AppStoreActionsType>

export const useTypedDispatch = () => useDispatch<TypedDispatch>()