import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Browse from './browse';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDisptachToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDisptachToProps)(Browse);