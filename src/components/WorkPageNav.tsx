import React from 'react';
import styled from 'styled-components';

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
    text-decoration: none;
  color: #fff;
`

const WorkPageNav = () => {
    return (
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
                    <LinkA href="#">Создать</LinkA>
                </Link>
            </List>

        </Nav>
    );
};

export default WorkPageNav;