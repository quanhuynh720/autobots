import { IState } from "../../reducers";
import { t3CellClick, t3Reset} from '../../action-mappers/tic-tac-toe-actions'
import { connect } from "react-redux";
import { T3Component } from "./T3Component";


const mapStateToProps = (state:IState) => {
    return {
        board: state.t3State.board,
        winner:state.t3State.winner,
        xTurn:state.t3State.xTurn
    }
}

const mapDispatchToProps = {
    t3CellClick,
    t3Reset
}

export default connect(mapStateToProps, mapDispatchToProps)(T3Component)