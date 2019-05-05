import * as APIUtils from '../util/playlist_utils';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_PLAYLIST_ERRORS = 'RECEIVE_PLAYLIST_ERRORS';

export const receivePlaylists = (playlists) => ({
    type: RECEIVE_PLAYLISTS,
    playlists
});

export const receivePlaylist = (playlist) => ({
    type: RECEIVE_PLAYLIST,
    playlist
});

export const removePlaylist = (id) => ({
    type: DELETE_PLAYLIST,
    id
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_PLAYLIST_ERRORS,
    errors
});

export const fetchPlaylists = () => dispatch => {
    APIUtils.fetchPlaylists().then(playlists => (
        dispatch(receivePlaylists(playlists))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchPlaylist = (id) => dispatch => {
    APIUtils.fetchPlaylist(id).then(playlist => (
        dispatch(receivePlaylist(playlist))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const createPlaylist = (playlist) => dispatch => {
    APIUtils.createPlaylist(playlist).then(playlist => (
        dispatch(receivePlaylist(playlist))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const updatePlaylist = (playlist) => dispatch => {
    APIUtils.updatePlaylist(playlist).then(playlist => (
        dispatch(receivePlaylist(playlist))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const deletePlaylist = (id) => dispatch => {
    APIUtils.deletePlaylist(id).then(playlist => (
        dispatch(removePlaylist(playlist))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};
