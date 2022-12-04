import React from 'react';
import styled from 'styled-components';
import backgroundIcon from '../assets/images/backgroundHome.png';
import arrowIcon from '../assets/images/playIcon.png';

const BackgroundImg = styled.div`
    background: url(${backgroundIcon});
  width: 453px;
  height: 453px;
  background-repeat: no-repeat;
  background-size: cover;
`
const MainPageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    padding-top: 4rem;
`
const TextContainer = styled.div`
`
const Title = styled.h2`
`
const Text = styled.p`
`
const Icon = styled.span`
  display: inline-block;
    background: url(${arrowIcon});
  height: 25px;
  width: 25px;
  background-repeat: no-repeat;
  background-size: cover;
  
`
const Input  = styled.input`
`
const ButtonLogin = styled.a`
`
const ButtonWatch = styled.a`
`

const MainPage = () => {
    return (
        <MainPageContainer>
            <TextContainer>
                <div>
                    <Title>Trello помогает собрать всех сотрудников, задачи и инструменты в одном месте</Title>
                    <Text>Объедините все в одном месте, даже если участники вашей команды рассеяны по миру.</Text>
                </div>
                <div>
                    <Input type="text" placeholder="Эл. почта"/>
                    <ButtonLogin href="">Зарегистрируйтесь - это бесплатно!</ButtonLogin>
                    <ButtonWatch>Смотрите видео</ButtonWatch>
                    <Icon></Icon>
                </div>
            </TextContainer>
            <BackgroundImg>

            </BackgroundImg>
        </MainPageContainer>
    );
};

export default MainPage;