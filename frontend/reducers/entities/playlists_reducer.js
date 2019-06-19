import {
    RECEIVE_PLAYLISTS,
    RECEIVE_PLAYLIST,
    DELETE_PLAYLIST
} from '../../actions/playlist_actions';
import { 
    RECEIVE_PLAYLIST_TRACK, 
    DELETE_PLAYLIST_TRACK
} from '../../actions/playlist_track_actions';
import { merge } from 'lodash';

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
            newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case RECEIVE_PLAYLIST_TRACK:
            newState = merge({}, state);
            const trackId = action.track_id;
            newState[action.playlistTrack.playlist_id].track_ids.push({
                track_id: trackId,
                playlist_track_id: action.playlistTrack.id
            });
            return newState;
        case DELETE_PLAYLIST_TRACK:
            newState = merge({}, state);
            const currentPlaylist = newState[action.playlistId];
            delete currentPlaylist.playlist_tracks[trackId];
            const currentPlaylistTrackIds = currentPlaylist.track_ids;
            const index = currentPlaylistTrackIds.indexOf(trackId);
            currentPlaylistTrackIds.splice(index, 1);
            return newState;
        default:
            return state;
    }
};

export default playlistsReducer;