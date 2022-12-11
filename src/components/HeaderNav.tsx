import React from 'react';
import styled from 'styled-components';
import Navigation from "./Navigation";
import iconTrello from '../assets/images/icontrello.png';
import {NavLink} from "react-router-dom";

const HeaderNav = styled.header`
  display: flex;
  justify-content: space-between;
`
const Title = styled.h1`

`
const Icon = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: url(${iconTrello});
  background-repeat: no-repeat;
  background-size: cover;

`
const IconTitleContainer = styled.div`
    display: flex;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

`
const ButtonLogin = styled(NavLink)`
  display: inline-block;
  cursor: pointer;
  align-items: center;
  color: rgb(23, 43, 77);
  font-size: 1.2rem;
  height: 100%;
  padding: 0.5rem 1.5rem;
  text-decoration: none;

`
const ButtonGet = styled.a`
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  height: 100%;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  background-color: rgb(0, 101, 255);
  color: rgb(255, 255, 255);

`
const ButtonContainer = styled.div`
    display: flex;

`
const HeaderNavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 58%;

`

const Header = () => {
    return (
        <HeaderNav>
            <HeaderNavContainer>
                <IconTitleContainer>
                    <IconContainer>
                        <Icon></Icon>
                    </IconContainer>
                    <Title>Trello</Title>
                </IconTitleContainer>
                <Navigation/>
            </HeaderNavContainer>
            <ButtonContainer>
                <ButtonLogin to="/login">Войти</ButtonLogin>
                <ButtonGet href='#'>Получить Trello бесплатно</ButtonGet>
            </ButtonContainer>
        </HeaderNav>
    );
};

export default Header;