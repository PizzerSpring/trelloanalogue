import React, {useEffect} from 'react';
import styled from 'styled-components';
import WorkPageHeader from "./WorkPageHeader";
import plusIcon from '../assets/images/plusAdd.png';
import {useSelector} from "react-redux";
import {BoardType} from "../redux/boards-reducer";
import {RootStateType, useTypedDispatch} from "../redux/store";
import {getBoards} from "../redux/redux-thunks";

const BoardWorkSpaceContainer = styled.div`
    display: flex;
`
const MyBoards = styled.div`
  border-right: #9B8E9A 2px;
  flex-basis: 20%;
    background: #b6a7b6;
  min-height: 100vh;
  padding: 10px;
`
const Cards = styled.div`
  flex-basis: 80%;
  background:  #746d8c;
  padding: 10px;
`
const Title = styled.div`
    display: flex;
  margin-bottom: 15px;
`
const TitleText = styled.h3`
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.003em;
  line-height: 16px;
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const ButtonImg = styled.button`
  cursor: pointer;
    display: inline-block;
  border: none;
    background: url(${plusIcon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
`
const Board = styled.div`
  color: #172b4d;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.003em;
  line-height: 16px;
  margin: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const BoardText = styled.div`
    cursor: pointer;
    margin-bottom: 5px;
`
const MyBoardTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0 12px;
  margin-bottom: 10px;
`
const NeedToDo = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 272px;
  position: relative;
  white-space: normal;
  padding: 10px;
`
const NeedToDoTitle = styled.div`
    font-size: 16px;
  color: #172b4d;
  font-weight: 600;
  line-height: 24px;
`
const AddCard = styled.div`
  margin-top: 10px;
    display: flex;
  align-items: center;
`
const AddCardIcon = styled.span`
  cursor: pointer;
  display: inline-block;
  border: none;
  background: url(${plusIcon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 5px;
`
const AddCardTitle = styled.div`
  cursor: pointer;
  display: inline-block;
    color: #5e6c84;
`

const BoardWorkspace = () => {
    const boards = useSelector<RootStateType, Array<BoardType>>((state) => state.boards);

    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getBoards())
    })
    console.log(boards)
    return (
        <>
            <WorkPageHeader/>
        <BoardWorkSpaceContainer>
            <MyBoards>
                <Title>
                    <TitleText>Мои доски</TitleText>
                    <ButtonImg></ButtonImg>
                </Title>
                    <Board>
                        {boards.map(b => <BoardText key={b.id}>
                            {b.title}
                        </BoardText>)}
                    </Board>
            </MyBoards>
            <Cards>
                <MyBoardTitle>todo</MyBoardTitle>
                <NeedToDo>
                    <NeedToDoTitle>Нужно сделать</NeedToDoTitle>
                    <AddCard>
                        <AddCardIcon></AddCardIcon>
                        <AddCardTitle>Добавить карточку</AddCardTitle>
                    </AddCard>
                </NeedToDo>
            </Cards>
        </BoardWorkSpaceContainer>
        </>
    );
};

export default BoardWorkspace;