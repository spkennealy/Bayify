import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Collection from './collection';

// TODO: EDIT ENTIRE PAGE

const mapStateToProps = state => ({
    // currentUser: state.entities.users[state.session.id]
});

const mapDisptachToProps = dispatch => ({
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDisptachToProps)(Collection);