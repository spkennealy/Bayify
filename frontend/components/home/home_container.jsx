import { logout, signup, login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDisptachToProps = dispatch => ({
    logout: () => dispatch(logout()),
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDisptachToProps)(Home);