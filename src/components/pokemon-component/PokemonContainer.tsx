import { connect } from "react-redux";
import { PokemonComponent } from "./PokemonComponent";
import { IState } from "../../reducers";
import { getAllPokemon } from '../../action-mappers/pokemon-actions'



const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser, //grab current user from store 
        allPokemon: state.pokemonState.allPokemon//grab all pokemon from store
    }
}

const mapDispatchToProps = {
    getAllPokemon // action mapper for getting pokemon with limit and offset
}


export default connect(mapStateToProps, mapDispatchToProps)(PokemonComponent)