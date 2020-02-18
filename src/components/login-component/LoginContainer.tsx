import { connect } from "react-redux";
import { IState } from "../../reducers";
import { LoginComponent } from "./LoginComponent";
import { updateCurrentUser } from '../../action-mappers/login-actions'


const mapStateToProps = (state:IState) => {
    return {
        //all of the state that goes to login component goes inside here
        loginMessage:state.userState.loginMessage
    }
}


const mapDispatchToProps = {
    //contains functions that will return actions
    //that we want the login component to be able to call
    //this is where the action mappers get passed in to the component
    updateCurrentUser
}

// this connect statemengt is building a new component that passes the redux info into the login component
export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)

