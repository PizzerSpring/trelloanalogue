
export type BoardsActionsTypes =
    ReturnType<typeof boardCreate>;

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
        default: {
            return state;
        }
    }
}

export const boardCreate = (board: BoardType) => ({type: 'CREATE-BOARD', board, boardId: board.id} as const)