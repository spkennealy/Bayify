import * as APIUtils from '../util/album_utils';

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
    APIUtils.fetchAlbums().then(albums => (
        dispatch(receiveAlbums(albums))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const fetchAlbum = (id) => dispatch => {
    APIUtils.fetchAlbum(id).then(album => (
        dispatch(receiveAlbum(album))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};
