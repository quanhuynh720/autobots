import { IUserState } from "."
import { loginTypes } from "../action-mappers/login-actions";

// first, we define the initial state of this piece of the store
const initialState:IUserState = {
    currentUser:null,
    loginMessage:''
}


//we have a function that recieves actions, and returns the new state after that action
export const loginReducer = (state = initialState, action:any) => {
    //all of the different ways for the reducer to update state
    //based on the type of the action it recieves
    switch (action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {//we always return the new state, which means, spread the old state
                ...state,
                currentUser:action.payload.currentUser,
                loginMessage: 'You have Logged in'
            }
        }
        case loginTypes.UNSUCCESSFUL_LOGIN: {
            return {
                ...state,
                loginMessage:action.payload.loginMessage
            }
        } 
    
        default:
            return state;
    }
}