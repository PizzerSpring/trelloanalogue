import React, {useState} from 'react';
import styled from 'styled-components';
import ProfileMenu from "../WorkPageHeader/ProfileMenu/ProfileMenu";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {BoardType} from "../../../redux/boards-reducer";
import {Navigate} from "react-router-dom";

const WorkSpaceContainer = styled.div`
  position: relative;
    min-height: 100vh;
  background:  #FAFBFC;
`


const Workspace = () => {
    const isEmpty = useSelector<RootStateType, Array<BoardType>>((state) => state.boards);

    if(isEmpty.length !== 0) {
        return <Navigate to={'/boards'}/>
    }
    return (
        <WorkSpaceContainer>

        </WorkSpaceContainer>
    );
};

export default Workspace;