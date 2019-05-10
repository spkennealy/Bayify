import * as APIUtils from '../util/playlist_track_utils';

export const RECEIVE_PLAYLIST_TRACK = 'RECEIVE_PLAYLIST_TRACK';
export const DELETE_PLAYLIST_TRACK = 'DELETE_PLAYLIST_TRACK';

export const receivePlaylistTrack = (playlistTrack) => ({
    type: RECEIVE_PLAYLIST_TRACK,
    playlistTrack
});

export const deletePlaylistTrack = (id) => ({
    type: DELETE_PLAYLIST_TRACK,
    id
});

export const addPlaylistTrack = (playlistTrack) => dispatch => {
    APIUtils.addPlaylistTrack(playlistTrack).then(playlistTrack => (
        dispatch(receivePlaylistTrack(playlistTrack))
    ));
};

export const removePlaylistTrack = (playlistTrack) => dispatch => {
    APIUtils.removePlaylistTrack(playlistTrack).then(() => (
        dispatch(deletePlaylistTrack(playlistTrack))
    ));
};
