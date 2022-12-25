
export type BoardsActionsTypes =
    ReturnType<typeof boardCreate> |
    ReturnType<typeof setBoards>;

export type BoardType = {
    id: string,
    title: string,
    addedDate: string,
    order: number
}

let initialState: Array<BoardType> = []

export const boardsReducer = (state:  Array<BoardType> = initialState, action: BoardsActionsTypes): Array<BoardType> => {
    switch (action.type) {
        case "CREATE-BOARD": {
            return [...state, {...action.board}];
        }
        case 'SET-BOARDS': {
            return action.boards.map(tl => {
                return {
                    ...tl,
                }
            })
        }
        default: {
            return state;
        }
    }
}

export const boardCreate = (board: BoardType) => ({type: 'CREATE-BOARD', board, boardId: board.id} as const)

export const setBoards = (boards: Array<BoardType>) => ({type: 'SET-BOARDS', boards} as const)