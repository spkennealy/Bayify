import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SideNavBar from './side_nav_bar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    state
});

const mapDisptachToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDisptachToProps)(SideNavBar);