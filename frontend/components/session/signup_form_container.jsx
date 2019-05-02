import { signup, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: "Sign Up"
});

const mapDisptachToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDisptachToProps)(SessionForm);