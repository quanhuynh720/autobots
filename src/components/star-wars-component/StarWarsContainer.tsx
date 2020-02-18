import { connect } from "react-redux";
import { IState } from "../../reducers";
import { changeStarWarsCharactersPage, getNewPageStarWarsCharacters} from '../../action-mappers/star-wars-actions'
import { StarWarsComponent } from "./StarWarsComponent";

const mapStateToProps = (state:IState) => {
    return {
        starWarsCharacters:state.starWarsState.starWarsCharacters,
        page:state.starWarsState.page
    }
}

const mapDispatchToProps = {
    changeStarWarsCharactersPage,
    getNewPageStarWarsCharacters
}



export default connect(mapStateToProps, mapDispatchToProps)(StarWarsComponent)