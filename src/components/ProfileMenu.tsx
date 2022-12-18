import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";
import {RootStateType, useTypedDispatch} from "../redux/store";
import {Navigate} from "react-router-dom";
import {logout} from "../redux/redux-thunks";
import headIcon from "../assets/images/head.png";

type ProfileMenuTypes = {
    menu: boolean
}

const Menu = styled.div`
    position: absolute;
  top: 50px;
  right: 1px;
  z-index: 1;
   width: 290px;
  height: 400px;
  padding: 12px;
  background: #fff;
  box-shadow: var(--ds-shadow-overlay, 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08));
`

const Account = styled.h3`
  font-size: 14px;
  color: #5E6C84;
  font-weight: 600;
  margin: 4px 12px;
  line-height: 16px;
`
const AccountTitle = styled.div`
    display: flex;
  justify-content: space-around;
`
const ProfileImg = styled.span`
  display: inline-block;
  width: 42px;
  height: 42px;
  background: url(${headIcon});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 50%;
  background-color: #fff;
  
`
const NameEmail = styled.div`
    margin-bottom: 8px;
`
const Name = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
    
`
const Email = styled.span`
  font-size: 12px;
  color: #B3BAC5;
  display: block;
`
const AccountLine = styled.hr`
  background-color: rgba(9, 30, 66, 0.13);
  display: block;
  height: 1px;
  border-color: transparent;
  margin: 8px 10px;
`
const AccountList = styled.ul`
    list-style-type: none;
  
`
const Link = styled.li`
`
const LinkA = styled.a`
  border: none;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  color: #172b4d;
  display: block;
  height: 100%;
  padding: 6px 12px;
  text-align: left;
  text-decoration: none;
  width: 100%;
  transition: none;
  margin: 0;
  outline: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  
  &:hover {
    background: #FAFBFC;
  }
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
                <Account>Учётная запись</Account>
                <AccountTitle>
                    <ProfileImg></ProfileImg>
                    <NameEmail>
                        <Name>Владислав Сергеевич Гущин</Name>
                        <Email>vladislav9646@gmail.com</Email>
                    </NameEmail>
                </AccountTitle>
                <AccountList>
                    <AccountLine/>
                    <Link>
                        <LinkA href='#'>Профиль и доступ</LinkA>
                    </Link>
                    <Link>
                        <LinkA href='#'>Действия</LinkA>
                    </Link>
                    <Link>
                        <LinkA href='#'>Карточки</LinkA>
                    </Link>
                    <Link>
                        <LinkA href='#'>Настройки</LinkA>
                    </Link>
                    <AccountLine/>
                    <Link>
                        <LinkA href='#'>Помощь</LinkA>
                    </Link>
                    <Link>
                        <LinkA href='#'>Горячие клавиши</LinkA>
                    </Link>
                    <AccountLine/>
                    <Link>
                        <LinkA href='#' onClick={() => {dispatch(logout())}}>Выйти</LinkA>
                    </Link>
                </AccountList>
            </Menu>}
        </>
    );
};

export default ProfileMenu;