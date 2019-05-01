import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Browse from './browse';

// const mapStateToProps = ({ errors, users, session }) => ({
//     errors: errors.session,
//     user: users[session.id]
// });

const mapDisptachToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDisptachToProps)(Browse);