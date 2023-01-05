import React from 'react';
import styled from 'styled-components';
import boardIcon from '../../../../../assets/images/boardImage.png';
type CreatorBoardMenuTypes = {
    menuBoard: boolean
    setMenuBoard: (value: boolean) => void
    boardSettings: boolean
    setBoardSettings: (value: boolean) => void
}

const BoardMenu = styled.div`
  cursor: pointer;
  position: absolute;
  top: 50px;
  left: 665px;
  z-index: 1;
  width: 290px;
  height: 120px;
  padding: 12px;
  background: #fff;
  box-shadow: var(--ds-shadow-overlay, 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08));
  &:hover {
    background: #FAFBFC;
  }
`
const CreateBoard = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`
const BoardImg = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: url(${boardIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  margin-right: 8px;
`
const BoardDescription = styled.div`
  color: #5e6c84;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin: 4px 0 0 0;
  padding: 0;
`

const CreatorBoardMenu = (props: CreatorBoardMenuTypes) => {
    return (
        <>
            {props.menuBoard && <BoardMenu onClick={() => {
                props.setBoardSettings(!props.boardSettings);
                props.setMenuBoard(!props.menuBoard);
            }}>
                <CreateBoard>
                    <BoardImg></BoardImg>
                    Создайте доску
                </CreateBoard>
                <BoardDescription>
                    Доска представляет собой совокупность карточек, упорядоченных в списках. Используйте её для управления проектом, отслеживания или организации чего угодно.</BoardDescription>
            </BoardMenu>}

        </>
    );
};

export default CreatorBoardMenu;