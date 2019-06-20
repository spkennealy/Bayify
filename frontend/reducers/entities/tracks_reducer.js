import { RECEIVE_TRACKS, REMOVE_TRACK } from '../../actions/track_actions';
import { DELETE_PLAYLIST_TRACK } from '../../actions/playlist_track_actions';
import merge from 'lodash/merge';

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_TRACKS:
            if (!action.tracks) return state;
            return action.tracks;
        case REMOVE_TRACK:
            newState = merge({}, state);
            if (window.location.hash.includes("albums") || 
                window.location.hash.includes("playlists")) {
                    return newState;
            } else {
                delete newState[action.trackId];
            }
            return newState;
        case DELETE_PLAYLIST_TRACK:
            newState = merge({}, state);
            delete newState[action.trackId];
            return newState;
        default:
            return state;
    }
};

export default tracksReducer;