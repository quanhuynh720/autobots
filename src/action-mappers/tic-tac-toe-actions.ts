export const t3Types = {
    T3_CELL_CLICK: 'T3_CELL_CLICK',
    T3_RESET_GAME: 'T3_RESET_GAME'
}

export const t3CellClick = (x:number, y:number) => {
    return {
        type: t3Types.T3_CELL_CLICK,
        payload: {
            x,
            y
        }
    }
}

export const t3Reset = () => {
    return {
        type:t3Types.T3_RESET_GAME
    }
}