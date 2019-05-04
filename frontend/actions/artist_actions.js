import * as APIUtils from '../util/artist_utils';

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
    APIUtils.fetchArtists().then(artists => (
        dispatch(receiveArtists(artists))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchArtist = (id) => dispatch => {
    APIUtils.fetchArtist(id).then(artist => (
        dispatch(receiveArtist(artist))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};
