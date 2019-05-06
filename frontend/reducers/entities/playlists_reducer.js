import {
    RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    DELETE_PLAYLIST
} from '../../actions/playlist_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            newState = merge({}, state);
            newState[action.playlist.id] = action.playlist;
            return newState;
        case DELETE_PLAYLIST:
            newState = merge({}, state);
            delete newState[action.playlist.id];
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;