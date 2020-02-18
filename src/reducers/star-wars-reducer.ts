import { IStarWarsState } from ".";
import { starWarsTypes } from "../action-mappers/star-wars-actions";


const initialState:IStarWarsState = {
    starWarsCharacters:[],
    page:1
}


export const starWarsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case starWarsTypes.NEW_PAGE_STAR_WARS_CHARACTERS:{
            return {
                ...state,
                starWarsCharacters:action.payload.starWarsCharacters
            }
        }
        case starWarsTypes.INCREMENT_STAR_WARS_CHARACTERS_PAGE: {
            return {
                ...state,
                page:action.payload.page
            }
        }
        default:
            return state
    }
}