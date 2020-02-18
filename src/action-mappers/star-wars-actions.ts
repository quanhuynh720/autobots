import { getPageStarWarsPeople } from "../remote/star-wars-clients/star-wars-people-client"

export const starWarsTypes = {
    NEW_PAGE_STAR_WARS_CHARACTERS: 'STARWARS_NEW_PAGE_STAR_WARS_CHARACTERS',
    INCREMENT_STAR_WARS_CHARACTERS_PAGE : 'STARWARS_INCREMENT_STAR_WARS_CHARACTERS_PAGE'
}



export const getNewPageStarWarsCharacters = (page:number) => async (dispatch:any) => {
    let characters = (await getPageStarWarsPeople(page)).results
    dispatch({
        type: starWarsTypes.NEW_PAGE_STAR_WARS_CHARACTERS,
        payload:{
            starWarsCharacters:characters
        }
    })
}


export const changeStarWarsCharactersPage = (page:number) => {
    return {
        type: starWarsTypes.INCREMENT_STAR_WARS_CHARACTERS_PAGE,
        payload: {
            page
        }
    }
}