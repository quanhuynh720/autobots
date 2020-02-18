import { IClickerState } from ".";
import { clickerTypes } from "../action-mappers/clicker-actions";


const initialstate:IClickerState = {
    numClicks:0
}

export const clickerReducer = (state = initialstate, action:any) => {
    switch (action.type) {
        case clickerTypes.INCREMENT_CLICK:{
            return {
                ...state,
                numClicks: state.numClicks + action.payload.clicks
            }
        }
    
        default:
           return state
    }
}