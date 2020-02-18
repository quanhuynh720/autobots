import { combineReducers } from "redux";
import { loginReducer } from "./login-reducer";
import { pokemonReducer } from "./pokemon-reducer";
import { clickerReducer } from "./clicker-reducer";
import { starWarsReducer } from "./star-wars-reducer";
import { ticTacToeReducer } from "./tic-tac-toe-reducer";


export interface ITicTacToeState {
    board: string[][]
    xTurn:boolean
    winner:string
}

// describe the data we want from the login component
export interface IUserState {
    currentUser:any
    loginMessage:string
}

//this is the data we want from the pokemon state
export interface IPokemonState {
    allPokemon:any[]
}

export interface IClickerState {
    numClicks:number
}

export interface IStarWarsState {
    starWarsCharacters:any[]
    page:number
}


// it will containe subinterfaces that represent different parts of state
export interface IState {
    userState : IUserState
    pokemonState: IPokemonState
    clickerState: IClickerState
    starWarsState:IStarWarsState
    t3State:ITicTacToeState
}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    userState:loginReducer,
    pokemonState:pokemonReducer,
    clickerState:clickerReducer,
    starWarsState:starWarsReducer,
    t3State:ticTacToeReducer
})