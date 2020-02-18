import { getMultiplePokemon, getPokemonByUrl } from "../remote/poke-api-clients/get-pokemon"

export const pokemonTypes = {
    SUCCESSFUL_GET_PAGE_POKEMON: 'POKEMON_SUCCSSFUL_GET_PAGE_POKEMON',
    UNSUCCESSFUL_GET_PAGE_POKEMON: 'POKEMON_UNSUCCSSFUL_GET_PAGE_POKEMON'
}


export const getAllPokemon = (limit: number, offset: number) => async (dispatch: any) => {
    try {
        let pokeLinks: any = await getMultiplePokemon(limit, offset)
        let pokemon = await Promise.all(pokeLinks.results.map((objects: any) => {
            return getPokemonByUrl(objects.url)
        }))

        dispatch({
            type:pokemonTypes.SUCCESSFUL_GET_PAGE_POKEMON,//what should the reducer do
            payload:{//the new data for the store
                allPokemon:pokemon
            }
        })

    } catch (e) {
        dispatch({
            type:pokemonTypes.UNSUCCESSFUL_GET_PAGE_POKEMON
        })
    }



}