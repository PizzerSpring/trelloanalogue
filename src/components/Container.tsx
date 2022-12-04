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

const HomePage = styled.div`
  background: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255)) no-repeat;
`


const Container = () => {
    return (
        <HomePage>
            <CommonContainer>
                <MainPage/>
            </CommonContainer>
        </HomePage>

    );
};

export default Container;