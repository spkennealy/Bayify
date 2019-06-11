import { search } from '../util/search_utils';
import { receiveArtists } from './artist_actions';
import { receiveAlbums } from './album_actions';
import { receiveTracks } from './track_actions';
import { receivePlaylists } from './playlist_actions';

export const searchAll = (input) => dispatch => {
    search(input).then(res => {
        dispatch(receiveTracks(res.tracks));
        dispatch(receiveArtists(res.artists));
        dispatch(receiveAlbums(res.albums));
        dispatch(receivePlaylists(res.playlists));
    });
};
