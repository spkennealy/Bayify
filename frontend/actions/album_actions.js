import * as APIUtils from '../util/album_utils';
import { receiveArtists } from './artist_actions';
import { receiveTracks } from './track_actions';

export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

export const receiveAlbums = (albums) => ({
    type: RECEIVE_ALBUMS,
    albums
});

export const receiveAlbum = (album) => ({
    type: RECEIVE_ALBUM,
    album
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ALBUM_ERRORS,
    errors
});

export const fetchAlbums = () => dispatch => {
    return APIUtils.fetchAlbums().then(res => {
        dispatch(receiveAlbums(res.albums));
        dispatch(receiveArtists(res.artists));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchFollowedAlbums = () => dispatch => {
    return APIUtils.fetchFollowedAlbums().then(res => {
        dispatch(receiveAlbums(res.albums));
        dispatch(receiveArtists(res.artists));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchFeaturedAlbums = () => dispatch => {
    return APIUtils.fetchFeaturedAlbums().then(res => {
        dispatch(receiveAlbums(res.albums));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchNewReleaseAlbums = () => dispatch => {
    return APIUtils.fetchNewReleaseAlbums().then(res => {
        dispatch(receiveAlbums(res.albums));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchAlbum = (id) => dispatch => {
    return APIUtils.fetchAlbum(id).then(res => {
        dispatch(receiveAlbum(res.albums));
        dispatch(receiveArtists(res.artists));
        dispatch(receiveTracks(res.tracks));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};
