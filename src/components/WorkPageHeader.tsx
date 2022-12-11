import React from 'react';
import styled from 'styled-components';
import WorkPageNav from "./WorkPageNav";
import bellIcon from "../assets/images/bell.png";
import headIcon from "../assets/images/head.png";
import logoTrelloIcon from "../assets/images/logoTrello.png";
import questionIcon from "../assets/images/question.png";

const Header = styled.header`
    display: flex;
  justify-content: space-between;
  padding: 5px 0;
  background: #026AA7;
`
const HeaderContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 58%;
`
const IconTitleContainer = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 90px;
`
const IconContainer = styled.div`
`
const Title = styled.h1`
    font-size: 21px;
  color: #fff;
`
const Icon = styled.span`
  display: inline-block;
  width: 16px;
  height: 15px;
  background: url(${logoTrelloIcon});
  background-repeat: no-repeat;
  background-size: cover;
`
const ButtonContainer = styled.div`
  display: flex;
    align-items: center;
  justify-content: space-between;
  min-width: 22%;
`
const Search = styled.input`
    display: inline-block;
  height: 30px;
  padding-left: 5px;
  border: none;
  border-radius: 4px;
  background: #3588B9;
  color: #fff;
`
const ProfileImg = styled.span`
  display: inline-block;
  width: 34px;
  height: 34px;
  background: url(${headIcon});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  border-radius: 50%;
  background-color: #fff;
`
const BellImg = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url(${bellIcon});
  background-repeat: no-repeat;
  background-size: cover;
`
const Question = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(${questionIcon});
  background-repeat: no-repeat;
  background-size: cover;
`

const WorkPageHeader = () => {
    return (
        <Header>
            <HeaderContainer>
                <IconTitleContainer>
                    <IconContainer>
                        <Icon></Icon>
                    </IconContainer>
                    <Title>Trello</Title>
                </IconTitleContainer>
                <WorkPageNav/>
            </HeaderContainer>
            <ButtonContainer>
                <Search type="text" placeholder="Поиск"/>
                <BellImg></BellImg>
                <Question></Question>
                <ProfileImg></ProfileImg>
            </ButtonContainer>
        </Header>
    );
};

export default WorkPageHeader;