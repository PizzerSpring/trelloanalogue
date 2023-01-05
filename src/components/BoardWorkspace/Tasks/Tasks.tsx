import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootStateType, useTypedDispatch} from "../../../redux/store";
import {BoardType} from "../../../redux/boards-reducer";
import {TaskType} from "../../../redux/tasks-reducer";
import {deleteTask, getTasks} from "../../../redux/redux-thunks";
import styled from 'styled-components';
import plusIcon from '../../../assets/images/plusAdd.png';

type TasksPropsType = {
    board: BoardType
}

const ButtonImg = styled.button`
  cursor: pointer;
  display: inline-block;
  border: none;
  background: url(${plusIcon});
  background-size: cover;
  background-repeat: no-repeat;
  width: 14px;
  height: 14px;
  transform: rotate(45deg);
`

const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
            {tasks.map(t =>
                <TaskContainer key={t.id}>
                    <span>{t.title}</span>
                    <ButtonImg onClick={() => {
                        dispatch(deleteTask(props.board.id, t.id));
                    }}></ButtonImg>
                </TaskContainer>
            )}
        </>
    );

};

export default Tasks;