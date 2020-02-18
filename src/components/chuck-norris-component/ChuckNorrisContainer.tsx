import { IState } from "../../reducers";
import { connect } from "react-redux";
import { ChuckNorrisComponent } from "./ChuckNorrisComponent";
import { incrementClicks } from '../../action-mappers/clicker-actions'



const mapStateToProps = (state:IState) => {
    return {
        numClicks:state.clickerState.numClicks
    }
}

const mapDispatchToProps = {
    incrementClicks
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisComponent)