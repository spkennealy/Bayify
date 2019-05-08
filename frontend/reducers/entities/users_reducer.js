import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_PLAYLIST_CURATOR } from '../../actions/playlist_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let user;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_PLAYLIST_CURATOR:
            user = Object.values(action.user)[0];
            return merge({}, state, { [user.id]: user });
        default:
            return state;
    }
};

export default usersReducer;