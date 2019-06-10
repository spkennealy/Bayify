import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SideNavBar from './side_nav_bar';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    state
});

const mapDisptachToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDisptachToProps)(SideNavBar));