import {setBoards} from "./boards-reducer";

export type TaskActionTypes =
    ReturnType<typeof setTasks> |
    ReturnType<typeof setBoards>;


export type allTaskType = {
    [key: string]: Array<TaskType>
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: number
    deadline: number
    id: string
    todoListId: string
    order: number
    addedDate: number

}

let initialState: allTaskType = {

}

export const tasksReducer = (state: allTaskType = initialState, action: TaskActionTypes): allTaskType => {
    switch (action.type) {
        case "SET-TASKS": {
            return {...state, [action.boardId]: action.tasks};
        }
        case "SET-BOARDS": {
            const stateCopy = {...state};
            action.boards.forEach(b => {
                stateCopy[b.id] = []
            })
            return stateCopy;
        }
        default: {
            return state;
        }
    }
}


export const setTasks = (boardId: string, tasks: Array<TaskType>) => ({type: 'SET-TASKS', boardId, tasks} as const)