import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootStateType, useTypedDispatch} from "../../../redux/store";
import {BoardType} from "../../../redux/boards-reducer";
import {TaskType} from "../../../redux/tasks-reducer";
import {getTasks} from "../../../redux/redux-thunks";
import styled from 'styled-components';

type TasksPropsType = {
    board: BoardType
}

const TaskContainer = styled.div`
  padding: 4px 8px 6px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: var(--ds-shadow-raised,0 1px 0 #091e4240);
  cursor: pointer;
  margin-top: 8px;
  max-width: 300px;
  min-height: 30px;
`

const Tasks = (props: TasksPropsType) => {
    const tasks = useSelector<RootStateType, Array<TaskType>>((state) => state.tasks[props.board.id]);

    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getTasks(props.board.id));
    })

    return (
        <>
            {tasks.map(t => <TaskContainer>{t.title}</TaskContainer>)}
        </>
    );

};

export default Tasks;