import { RECEIVE_TRACKS } from '../../actions/track_actions';
import { DELETE_PLAYLIST_TRACK } from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_TRACKS:
            if (!action.tracks) return state;
            return action.tracks;
        case DELETE_PLAYLIST_TRACK:
            newState = merge({}, state);
            delete newState[action.trackId];
            return newState;
        default:
            return state;
    }
};

export default tracksReducer;