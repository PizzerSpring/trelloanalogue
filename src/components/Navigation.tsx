import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  min-width: 70%;
`

const List = styled.ul`
    display: flex;
     justify-content: space-between;
    list-style-type: none;
    
`

const Link = styled.li`
    font-size: 18px;
`

const LinkA = styled.a`
    font-size: 18px;
    text-decoration: none;
   color: #000;
`

const Navigation = () => {
    return (
        <Nav>
            <List>
                <Link>
                    <LinkA href='#'>Возможности</LinkA>
                </Link>
                <Link>
                    <LinkA href='#'>Решения</LinkA>
                </Link>
                <Link>
                    <LinkA href='#'>Планы</LinkA>
                </Link>
                <Link>
                    <LinkA href='#'>Цены</LinkA>
                </Link>
                <Link>
                    <LinkA href='#'>Ресурсы</LinkA>
                </Link>
                {/*<Link>Возможности</Link>
                <Link>Решения</Link>
                <Link>Планы</Link>
                <Link>Цены</Link>
                <Link>Ресурсы</Link>*/}
            </List>
        </Nav>
    );
};

export default Navigation;