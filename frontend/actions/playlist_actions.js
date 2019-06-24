import * as APIUtils from '../util/playlist_utils';
import { receiveTracks } from './track_actions';
import { receiveAlbums } from './album_actions';
import { receiveArtists } from './artist_actions';

export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS';
export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const DELETE_PLAYLIST = 'DELETE_PLAYLIST';
export const RECEIVE_PLAYLIST_CURATOR = 'RECEIVE_PLAYLIST_CURATOR';
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

export const receivePlaylistCurator = (user) => ({
    type: RECEIVE_PLAYLIST_CURATOR,
    user
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_PLAYLIST_ERRORS,
    errors
});

export const fetchPlaylists = () => dispatch => {
    return APIUtils.fetchPlaylists().then(res => {
        dispatch(receivePlaylistCurator(res.users));
        dispatch(receivePlaylists(res.playlists));
        dispatch(receiveTracks(res.tracks));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchFollowedPlaylists = () => dispatch => {
    return APIUtils.fetchFollowedPlaylists().then(res => {
        dispatch(receivePlaylistCurator(res.users));
        dispatch(receivePlaylists(res.playlists));
        dispatch(receiveTracks(res.tracks));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchFeaturedPlaylists = () => dispatch => {
    return APIUtils.fetchFeaturedPlaylists().then(res => {
        dispatch(receivePlaylists(res.playlists));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchChartsPlaylists = () => dispatch => {
    return APIUtils.fetchChartsPlaylists().then(res => {
        dispatch(receivePlaylists(res.playlists));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchGenresPlaylists = () => dispatch => {
    return APIUtils.fetchGenresPlaylists().then(res => {
        dispatch(receivePlaylists(res.playlists));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchPlaylist = (id) => dispatch => {
    return APIUtils.fetchPlaylist(id).then(res => {
        dispatch(receivePlaylist(res.playlists));
        dispatch(receivePlaylistCurator(res.users));
        dispatch(receiveAlbums(res.albums));
        dispatch(receiveTracks(res.tracks));
        dispatch(receiveArtists(res.artists));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const createPlaylist = (playlist) => dispatch => {
    return APIUtils.createPlaylist(playlist).then(res => {
        dispatch(receivePlaylist(res.playlists)); 
        dispatch(receivePlaylistCurator(res.users)); 
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const updatePlaylist = (playlist) => dispatch => {
    return (APIUtils.updatePlaylist(playlist)).then(playlist => (
        dispatch(receivePlaylist(playlist))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const deletePlaylist = (id) => dispatch => {
    APIUtils.deletePlaylist(id).then(() => (
        dispatch(removePlaylist(id))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};