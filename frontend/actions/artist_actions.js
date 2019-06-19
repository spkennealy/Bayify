import * as APIUtils from '../util/artist_utils';
import { receiveAlbums } from './album_actions';
import { receiveTracks } from './track_actions';

export const RECEIVE_ARTISTS = 'RECEIVE_ARTISTS';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';

export const receiveArtists = (artists) => ({
    type: RECEIVE_ARTISTS,
    artists
});

export const receiveArtist = (artist) => ({
    type: RECEIVE_ARTIST,
    artist
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ARTIST_ERRORS,
    errors
});

export const fetchArtists = () => dispatch => {
    return APIUtils.fetchArtists().then(artists => (
        dispatch(receiveArtists(artists))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchFollowedArtists = () => dispatch => {
    return APIUtils.fetchFollowedArtists().then(artists => (
        dispatch(receiveArtists(artists))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchFeaturedArtists = () => dispatch => {
    return APIUtils.fetchFeaturedArtists().then(artists => (
        dispatch(receiveArtists(artists))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchArtist = (id) => dispatch => {
    return APIUtils.fetchArtist(id).then(res => {
        dispatch(receiveArtist(res.artists));
        dispatch(receiveAlbums(res.albums));
        dispatch(receiveTracks(res.tracks));
    }, error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};
