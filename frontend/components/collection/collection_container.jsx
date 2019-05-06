import { connect } from 'react-redux';
import Collection from './collection';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDisptachToProps = dispatch => ({
    openModal: () => dispatch(openModal)
});

export default connect(mapStateToProps)(Collection);