import React from 'react';
import styled from 'styled-components';
import CreatorBoardMenu from "./CreatorBoardMenu/CreatorBoardMenu";

type WorkPageNavTypes = {
    menuBoard: boolean
    setMenuBoard: (value: boolean) => void
    boardSettings: boolean
    setBoardSettings: (value: boolean) => void
}

const Nav = styled.nav`
  min-width: 70%;
`
const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Link = styled.li`
`
const LinkA = styled.a`
  cursor: pointer;
  display: inline-block;
  padding: 6px;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;

  &:hover {
    background: #025586;
  }
`

const WorkPageNav = (props: WorkPageNavTypes) => {
    return (
        <>
            <Nav>
                <List>
                    <Link>
                        <LinkA href="#">Рабочие пространства</LinkA>
                    </Link>
                    <Link>
                        <LinkA href="#">Недавние</LinkA>
                    </Link>
                    <Link>
                        <LinkA href="#">В избранном</LinkA>
                    </Link>
                    <Link>
                        <LinkA href="#">Шаблоны</LinkA>
                    </Link>
                    <Link>
                        <LinkA onClick={() => {
                            props.setMenuBoard(!props.menuBoard)
                        }}>Создать</LinkA>
                    </Link>
                </List>

            </Nav>
            <CreatorBoardMenu menuBoard={props.menuBoard} boardSettings={props.boardSettings} setBoardSettings={props.setBoardSettings} setMenuBoard={props.setMenuBoard}/>
        </>
    );
};

export default WorkPageNav;