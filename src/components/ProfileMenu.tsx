import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {RootStateType, useTypedDispatch} from "../redux/store";
import {Navigate} from "react-router-dom";
import {logout} from "../redux/redux-thunks";

type ProfileMenuTypes = {
    menu: boolean
}

const Menu = styled.div`
    position: absolute;
  top: 50px;
  right: 0;
  z-index: 1;
    border: 1px solid;
   width: 290px;
  height: 400px;
`

const ProfileMenu = (props: ProfileMenuTypes) => {
    const isLogedIn = useSelector<RootStateType, boolean>((state) =>
        state.auth.isLoggedIn
    );

    const dispatch = useTypedDispatch();
    if(!isLogedIn) {
        return <Navigate to={'/'}/>
    }
    return (
        <>
            {props.menu && <Menu>
                <button onClick={() => {dispatch(logout())}}>Выйти</button>
            </Menu>}
        </>
    );
};

export default ProfileMenu;