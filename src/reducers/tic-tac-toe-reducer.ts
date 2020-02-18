import { ITicTacToeState } from ".";
import { t3Types } from "../action-mappers/tic-tac-toe-actions";

const initialState: ITicTacToeState = {
    board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ],
    winner: '',
    xTurn: true
}


export const ticTacToeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case t3Types.T3_CELL_CLICK: {
            if(state.winner){
                return state
            }
            let { x, y } = action.payload
            if(state.board[x][y] !== ' '){
                return state
            }
            // if we want react to rerender, we need to change state to a new object
            let newBoard = [[...state.board[0]],[...state.board[1]],[...state.board[2]]]
            state.xTurn ? newBoard[x][y] = 'X' : newBoard[x][y] = 'O'
            let newWinner = checkWinner(newBoard)
            if(!newWinner){
                return {
                    ...state,
                    board:newBoard,
                    xTurn: !state.xTurn
                }
            }else {
                return {
                    ...state,
                    board:newBoard,
                    winner: newWinner + ' Is The Winner'
                }
            }
        }
        case t3Types.T3_RESET_GAME: {
            return initialState
        }
        default:
            return state;
    }
}



const checkWinner = (board: string[][]) => {
    //all horizontals
    let res = ''

    for (const row of board) {
        if ((row[0] === row[1]) && (row[0] === row[2]) && row[0] !== ' ') {
            res = row[0]
        }
    }
    if (!res) {
        res = board[0].reduce((total, cell, index) => {
            if ((cell === board[1][index]) && (cell === board[2][index]) && cell !== ' ') {
                return total + cell
            } else {
                return total + ''
            }
        }, '')
    }
    if (((board[0][0] === board[1][1] && board[0][0] === board[2][2])
        || (board[2][0] === board[1][1] && board[2][0] === board[0][2]))
        && board[1][1] !== ' ') {
        res = board[1][1]
    }


    if(!res){
        res = 'No one'
        for (const row of board) {
            if(row[0] === ' ' || row[1] === ' ' || row[2] === ' '){
                res = ''//not full
            }
        }
    }

    return res// '' 'Xchar' 'Ochar' 'No One'
}