import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    
`

const List = styled.ul`
    display: flex;
    list-style-type: none;
    
`

const Link = styled.li`
    font-size: 18px;
    margin-right: 40px;
  
`

const Navigation = () => {
    return (
        <Nav>
            <List>
                <Link>Возможности</Link>
                <Link>Решения</Link>
                <Link>Планы</Link>
                <Link>Цены</Link>
                <Link>Ресурсы</Link>
            </List>
        </Nav>
    );
};

export default Navigation;