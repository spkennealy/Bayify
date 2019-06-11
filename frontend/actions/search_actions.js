import { search } from '../util/search_utils';
import { receiveArtists } from './artist_actions';
import { receiveAlbums } from './album_actions';
import { receiveTracks } from './track_actions';
import { receivePlaylists } from './playlist_actions';

// export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';

// export const receiveSearch = (payload) => ({
//     type: RECEIVE_SEARCH,
//     payload
// });

// export const searchAll = input => dispatch => {
//     search(input).then(res => {
//         // dispatch(receiveSearch(res));
//         if (res.playlists) dispatch(receivePlaylists(res.playlists));
//         if (res.artists) dispatch(receiveArtists(res.artists));
//         if (res.tracks) dispatch(receiveTracks(res.tracks));
//         if (res.albums) dispatch(receiveAlbums(res.albums));   
//     });
// };

export const searchAll = input => {
    return search(input);
};