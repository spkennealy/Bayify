import { connect } from 'react-redux';
import Search from './search';
import { searchAll } from '../../actions/search_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

// const mapDisptachToProps = dispatch => ({
//     searchAll: input => searchAll(input)
// });

export default connect(mapStateToProps, null)(Search);