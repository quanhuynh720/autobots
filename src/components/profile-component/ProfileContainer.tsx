import { connect } from 'react-redux';
import { UserProfile } from './UserProfileComponent';
import { IState } from '../../reducers';

const mapStateToProps = (state: IState) => {
    return {
        user: state.userState.currentUser
    }
}

export default connect(mapStateToProps)(UserProfile)