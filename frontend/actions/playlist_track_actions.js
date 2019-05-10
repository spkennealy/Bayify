import * as APIUtils from '../util/playlist_track_utils';

export const RECEIVE_PLAYLIST_TRACK = 'RECEIVE_PLAYLIST_TRACK';
export const DELETE_PLAYLIST_TRACK = 'DELETE_PLAYLIST_TRACK';

export const receivePlaylistTrack = (playlistTrack) => ({
    type: RECEIVE_PLAYLIST_TRACK,
    playlistTrack
});

export const deletePlaylistTrack = (trackId, playlistId) => ({
    type: DELETE_PLAYLIST_TRACK,
    trackId,
    playlistId
});

export const addPlaylistTrack = (playlistTrack) => dispatch => {
    APIUtils.addPlaylistTrack(playlistTrack).then(playlistTrack => (
        dispatch(receivePlaylistTrack(playlistTrack))
    ));
};

export const removePlaylistTrack = (playlistTrackId, trackId, playlistId) => dispatch => {
    APIUtils.removePlaylistTrack(playlistTrackId).then(() => (
        dispatch(deletePlaylistTrack(trackId, playlistId))
    ));
};
