import React from 'react';
import styled from 'styled-components';
import bgLeftLoginIcon from '../assets/images/bgLeftLogin.png';
import bgRightLoginIcon from '../assets/images/bgRightLogin.png';
import iconTrello from  '../assets/images/icontrello.png';

const LoginContainer = styled.div`
    display: flex;
  justify-content: space-between;
  background-color: #f9fafc;
  min-height: 100vh;
`
const BgLeftContainer = styled.div`
    display: flex;
  align-items: flex-end;
`
const BgLeft = styled.div`
  background: url(${bgLeftLoginIcon});
  width: 305px;
  height: 337px;
  background-repeat: no-repeat;
  background-size: cover;
`
const Form = styled.form`
  background-color: #ffffff;
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
  text-align: center;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  max-width: 450px;
`
const FormContainer = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
`
const Title = styled.h1`
    display: inline-block;
  font-size: 48px;
`
const TextTitle = styled.h2`
  text-align: center;
  color: #5e6c84;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 25px;
`
const Email = styled.input`
  display: block;
  padding-left: 10px;
  font-size: 14px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  height: 40px;
  -webkit-transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;
  transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;
  min-width: 350px;
  margin-bottom: 20px;
`
const Password = styled.input`
  display: block;
  padding-left: 10px;
  font-size: 14px;
  background-color: #fafbfc;
  border: 2px solid #dfe1e6;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 3px;
  height: 40px;
  -webkit-transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;
  transition: background-color .2s ease-in-out 0s,border-color .2s ease-in-out 0s;
  min-width: 350px;
  margin-bottom: 20px;
`
const Button = styled.a`
  background: #CDD2D4;
  background: -webkit-gradient(linear, left top, left bottom, from(#CDD2D4), to(#C4C9CC));
  background: linear-gradient(to bottom, #CDD2D4 0%, #C4C9CC 100%);
  border-radius: .3em;
  box-shadow: 0 2px 0 hsl(0,0%,30%);
  color: hsl(0,0%,30%);
  display: inline-block;
  font-weight: bold;
  margin-bottom: .8em;
  padding: .6em 1.3em;
  position: relative;
  text-decoration: none;
  border: 0px;
  color: #fff;
  background: #5AAC44;
  min-width: 350px;
  margin-bottom: 20px;
`
const Icon = styled.span`
  display: inline-block;
  background: url(${iconTrello});
  width: 44px;
  height: 43px;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 20px;
`
const BgRightContainer = styled.div`
    display: flex;
  align-items: flex-end;
`
const BgRight = styled.div`
  background: url(${bgRightLoginIcon});
  width: 322px;
  height: 287px;
  background-repeat: no-repeat;
  background-size: cover;
`
const FooterContainer = styled.ul`
    list-style-type: none;
  display: flex;
  justify-content: space-between;
  min-width: 580px;
`
const Footer = styled.footer`
  
`
const Link = styled.li`
`
const LinkA = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #5e6c84;
`
const FooterBottom = styled.div`
    font-size: 14px;
  color: #5e6c84;
  text-align: center;
  cursor: pointer;
`
const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid hsl(0,0%,80%);
  padding: 0;
  width: 430px;
  margin: 0 auto 30px;
`

const TitleIconContainer = styled.div`
  margin: 25px 0 25px 0;
    text-align: center;
  
`

const Login = () => {
    return (
        <LoginContainer>
            <BgLeftContainer>
                <BgLeft></BgLeft>
            </BgLeftContainer>
            <FormContainer>
                <TitleIconContainer>
                    <Icon></Icon>
                    <Title>Trello</Title>
                </TitleIconContainer>
                <Form>
                    <TextTitle>Вход в Trello</TextTitle>
                    <Email placeholder="Укажите адрес электронной почты"></Email>
                    <Password placeholder="Укажите пароль"></Password>
                    <Button href="">Войти</Button>
                </Form>
                <Footer>
                    <Hr/>
                    <FooterContainer>
                        <Link>
                            <LinkA href="#">Шаблоны</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">Цены</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">Приложения</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">Вакансии</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">Блог</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">Разработчики</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">О нас</LinkA>
                        </Link>
                        <Link>
                            <LinkA href="#">Помощь</LinkA>
                        </Link>
                    </FooterContainer>
                    <FooterBottom>Настройки файлов cookie</FooterBottom>
                </Footer>
            </FormContainer>
            <BgRightContainer>
                <BgRight></BgRight>
            </BgRightContainer>

        </LoginContainer>
    );
};

export default Login;