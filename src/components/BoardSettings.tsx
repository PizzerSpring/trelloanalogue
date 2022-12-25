import React, {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import arrowLeftIcon from '../assets/images/arrowleftImage.png';
import crossIcon from  '../assets/images/crossImage.png';
import backgroundBoardIcon from  '../assets/images/backgroundBoardImage.png';
import pointerIcon from '../assets/images/pointerImage.png';
import {useTypedDispatch} from "../redux/store";
import {createBoard} from "../redux/redux-thunks";

type BoardSettingsTypes = {
    boardSettings: boolean
    setBoardSettings: (value: boolean) => void
    menuBoard: boolean
    setMenuBoard: (value: boolean) => void
}

const Settings = styled.div`
  position: absolute;
  top: 50px;
  left: 665px;
  z-index: 1;
  width: 290px;
  height: 380px;
  padding: 12px;
  background: #fff;
  box-shadow: var(--ds-shadow-overlay, 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08));
`
const Header = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`
const BackArrowImg = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 7px;
  height: 12px;
  background: url(${arrowLeftIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
`
const HeaderTitle = styled.h2`
    font-size: 14px;
  font-weight: 400;
  color: #5e6c84;
`
const CrossButtonImg = styled.span`
  cursor: pointer;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url(${crossIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
`
const SettingsLine = styled.hr`
  background-color: rgba(9, 30, 66, 0.13);
  display: block;
  height: 1px;
  border-color: transparent;
  margin: 8px 10px;
`
const BackgroundBoardImgContainer = styled.div`
    display: flex;
  justify-content: center;
`
const BackgroundBoardImg = styled.div`
  display: inline-block;
  width: 202px;
  height: 122px;
  background: url(${backgroundBoardIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
`
const BoardTitleContainer = styled.div`
    margin-top: 10px;
`
const BoardTitle = styled.h3`
  color: #5e6c84;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  display: flex;
  flex-flow: column;
  margin-bottom: 5px;
`
const InputTitle = styled.input`
  outline: none;
  border: none;
  box-sizing: border-box;
  color: #172b4d;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  border-radius: 3px;
  padding: 8px 12px;
  background-color: var(--ds-background-input, #fafbfc);
  width: 100%;
  box-shadow: inset 0 0 0 2px var(--ds-border-danger, #eb5a46);
  margin-bottom: 0;
`
const BoardPointerText = styled.span`
  color: #172b4d;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`
const BoardPointerImg = styled.span`
  display: inline-block;
  width: 17px;
  height: 19px;
  background: url(${pointerIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  margin-right: 10px;
`
const ButtonCreate = styled.button`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: var(--ds-text, #172b4d);
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  padding: 6px 12px;
  text-decoration: none;
  white-space: normal;
  background-color: var(--ds-background-neutral, rgba(9, 30, 66, 0.04));
  box-shadow: none;
  border: none;
  transition-property: background-color, border-color, box-shadow;
  transition-duration: 85ms;
  transition-timing-function: ease;
  margin-bottom: 8px;
`
const PointerContainer = styled.div`
    display: flex;
  align-items: center;
  margin: 5px 0;
`
const Footer = styled.footer`
    font-size: 12px;
  color: #5e6c84;
`
const LinkA = styled.a`
  color: #5e6c84;
`


const BoardSettings = (props: BoardSettingsTypes) => {
    const [title, setTitle] = useState('');
    const dispatch = useTypedDispatch();
    return (
        <>
            {props.boardSettings && <Settings>
                <Header>
                    <BackArrowImg   onClick={() => {
                        props.setBoardSettings(!props.boardSettings);
                        props.setMenuBoard(!props.menuBoard);
                    }}></BackArrowImg>
                    <HeaderTitle>Создать доску</HeaderTitle>
                    <CrossButtonImg  onClick={() => {props.setBoardSettings(!props.boardSettings)}}></CrossButtonImg>
                </Header>
                <SettingsLine/>
                <BackgroundBoardImgContainer>
                    <BackgroundBoardImg></BackgroundBoardImg>
                </BackgroundBoardImgContainer>
                <BoardTitleContainer>
                    <BoardTitle>Заголовок доски</BoardTitle>
                    <InputTitle type='text' value={title} onChange={(e:ChangeEvent<HTMLInputElement>) => {
                        setTitle(e.currentTarget.value);
                    }
                    }/>
                    <PointerContainer>
                        <BoardPointerImg></BoardPointerImg>
                        <BoardPointerText>Укажите название доски</BoardPointerText>
                    </PointerContainer>
                </BoardTitleContainer>
                <ButtonCreate onClick={() => {
                    props.setBoardSettings(!props.boardSettings);
                    dispatch(createBoard(title));
                }}>Создать</ButtonCreate>
                <Footer>
                    Используя изображения с сайта Unsplash вы принимаете его
                    <LinkA href="#"> Условия использоания</LinkA> и
                    <LinkA href="#"> правила лицензии.</LinkA>
                </Footer>
            </Settings>}

        </>
    );
};

export default BoardSettings;