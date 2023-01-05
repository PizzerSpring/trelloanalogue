import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {RootStateType, useTypedDispatch} from "../../../redux/store";
import {BoardType} from "../../../redux/boards-reducer";
import {TaskType} from "../../../redux/tasks-reducer";
import {getTasks} from "../../../redux/redux-thunks";

type TasksPropsType = {
    board: BoardType
}

const Tasks = (props: TasksPropsType) => {
    const tasks = useSelector<RootStateType, Array<TaskType>>((state) => state.tasks[props.board.id]);

    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getTasks(props.board.id));
    },[])

    return (
        <>
            {tasks.map(t => <>{t.title}</>)}
        </>
    );

};

export default Tasks;