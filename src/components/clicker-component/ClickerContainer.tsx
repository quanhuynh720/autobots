import { IState } from "../../reducers";
import { incrementClicks } from '../../action-mappers/clicker-actions'
import { connect } from "react-redux";
import { ClickerComponent } from "./ClickerComponent";

const mapStateToProps = (state:IState) => {
    return {
        numClicks:state.clickerState.numClicks
    }
}

const mapDispatchToProps = {
    incrementClicks
}
export default connect(mapStateToProps, mapDispatchToProps)(ClickerComponent)