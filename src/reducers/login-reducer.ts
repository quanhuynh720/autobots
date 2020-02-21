import { IUserState } from "."
import { loginTypes } from "../action-mappers/login-actions";

const initialState:IUserState = {
    currentUser:
     {
         userId: 1,
         firstname: '',
         lastname: '',
         username: '',
         email: '',
         password: '',
         bio: '',
         url: ''
     }
    ,
    loginMessage:''
}


export const loginReducer = (state = initialState, action:any) => {
    
    switch (action.type) {
        case loginTypes.SUCCESSFUL_LOGIN:{
            return {
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