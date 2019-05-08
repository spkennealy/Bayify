import {
    RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    DELETE_PLAYLIST
} from '../../actions/playlist_actions';
import { 
    RECEIVE_PLAYLIST_TRACK, 
    DELETE_PLAYLIST_TRACK
} from '../../actions/playlist_track_actions';
import { merge, remove } from 'lodash';

const playlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_PLAYLISTS:
            return action.playlists;
        case RECEIVE_PLAYLIST:
            newState = merge({}, state);
            let playlist = Object.values(action.playlist)[0];
            newState[playlist.id] = playlist;
            return newState;
        case DELETE_PLAYLIST:
            debugger;
            newState = merge({}, state);
            delete newState[action.playlist.id];
            return newState;
        case RECEIVE_PLAYLIST_TRACK:
            newState = merge({}, state);
            newState[action.playlistTrack.playlist_id].track_ids.push(action.track_id);
            return newState;
        case DELETE_PLAYLIST_TRACK:
            newState = merge({}, state);
            let trackIds = newState[action.playlist_id].track_ids;
            const idx = trackIds.indexOf(action.track_id);
            trackIds = trackIds.slice(0, idx).concat(trackIds.slice(idx+1));
            newState[action.playlist_id].track_ids = trackIds;
            return newState;
        default:
            return state;
    }
};

export default playlistsReducer;