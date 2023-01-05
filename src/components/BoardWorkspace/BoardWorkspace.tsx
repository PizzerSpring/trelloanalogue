import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import WorkPageHeader from "../WorkContainer/WorkPageHeader/WorkPageHeader";
import plusIcon from '../../assets/images/plusAdd.png';
import {useSelector} from "react-redux";
import {BoardType} from "../../redux/boards-reducer";
import {RootStateType, useTypedDispatch} from "../../redux/store";
import {createTask, deleteBoard, getBoards} from "../../redux/redux-thunks";
import Tasks from "./Tasks/Tasks";
import EditableDiv from "./EditableDiv/EditableDiv";

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
  background: #746d8c;
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
const BoardTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BoardTextDeleteIcon = styled.span`
  cursor: pointer;
  display: inline-block;
  background: url(${plusIcon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
`
const BoardText = styled.div`
  cursor: pointer;
  padding: 5px;

  &:hover {
    background: #9c8e9a;
  }
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
const TaskContainer = styled.div`
  padding: 4px 8px 6px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: var(--ds-shadow-raised, 0 1px 0 #091e4240);
  cursor: pointer;
  margin-top: 8px;
  max-width: 300px;
  min-height: 30px;
`

const BoardWorkspace = () => {
    const [selected, setSelected] = useState<boolean>(false);
    const [element, setElement] = useState<string>('');

    const boards = useSelector<RootStateType, Array<BoardType>>((state) => state.boards);

    const dispatch = useTypedDispatch();

    const crTask = (boardId: string, title: string) => {
        dispatch(createTask(boardId, title));
    }

    useEffect(() => {
        dispatch(getBoards())
    }, [])
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
                        {boards.map(b => <BoardTextContainer key={b.id}>
                                <BoardText>{b.title}</BoardText>
                                <BoardTextDeleteIcon onClick={() => {
                                    dispatch(deleteBoard(b.id));
                                }}></BoardTextDeleteIcon>
                            </BoardTextContainer>
                        )}
                    </Board>
                </MyBoards>
                <Cards>
                    <MyBoardTitle>{element}</MyBoardTitle>
                    {boards.map(b =>
                        <>
                            <BoardText>{b.title}</BoardText>
                            <NeedToDo key={b.id}>
                                <NeedToDoTitle>Нужно сделать</NeedToDoTitle>
                                <AddCard>
                                    <AddCardIcon></AddCardIcon>
                                    <EditableDiv createTask={(title: string) => {
                                        crTask(b.id, title)
                                    }}/>
                                </AddCard>
                                <Tasks key={b.id} board={b}/>
                            </NeedToDo>
                        </>
                    )}

                </Cards>
            </BoardWorkSpaceContainer>
        </>
    );
};

export default BoardWorkspace;