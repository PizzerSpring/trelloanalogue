import {setBoards} from "./boards-reducer";

export type TaskActionTypes =
    ReturnType<typeof setTasks> |
    ReturnType<typeof setBoards> |
    ReturnType<typeof taskCreate> |
    ReturnType<typeof taskDelete>;


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
        case "DELETE-TASK": {
            return {...state, [action.boardId]: state[action.boardId].filter(t => t.id !== action.taskId)}
        }
        case "CREATE-TASK": {
            const task = action.task;
            return {...state, [task.todoListId]: [task, ...state[task.todoListId]]}
        }
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

export const taskCreate = (task: TaskType) => ({type: 'CREATE-TASK',task} as const)

export const taskDelete = (boardId: string, taskId: string) => ({type: 'DELETE-TASK', boardId, taskId} as const)