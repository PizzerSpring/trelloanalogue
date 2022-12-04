import React from 'react';
import styled from 'styled-components';
import MainPage from "./MainPage";

const CommonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    
`


const Container = () => {
    return (
        <CommonContainer>
            <MainPage/>
        </CommonContainer>
    );
};

export default Container;