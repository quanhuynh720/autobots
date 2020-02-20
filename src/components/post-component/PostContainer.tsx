import { connect } from 'react-redux';
import { MakePost } from './MakePostComponent';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

export default connect(mapStateToProps)(MakePost)