import React from 'react';
import styled from 'styled-components';
import backgroundIcon from '../assets/images/backgroundHome.png';
import arrowIcon from '../assets/images/playIcon.png';



const BackgroundImg = styled.div`
  background: url(${backgroundIcon});
  width: 352px;
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
    flex-basis: 60%;
`
const Title = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1rem;
`
const Text = styled.p`
    font-size: 20px;
`
const Icon = styled.span`
  display: inline-block;
  background: url(${arrowIcon});
  height: 25px;
  width: 25px;
  background-repeat: no-repeat;
  background-size: cover;

`
const Input = styled.input`
    display: block;
`
const ButtonLogin = styled.a`
    display: block;
`
const ButtonWatch = styled.a`
    display: block;
`

const TextTitleContainer = styled.div`
    margin-bottom: 40px;
`

const MainPage = () => {
    return (
            <MainPageContainer>
                <TextContainer>
                    <TextTitleContainer>
                        <Title>Trello помогает собрать всех сотрудников, задачи и инструменты в одном месте</Title>
                        <Text>Объедините все в одном месте, даже если участники вашей команды рассеяны по миру.</Text>
                    </TextTitleContainer>
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