import * as APIUtils from '../util/track_utils';
import { receiveArtists } from './artist_actions';
import { receiveAlbums } from './album_actions';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = (tracks) => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const fetchTracks = () => dispatch => {
    return APIUtils.fetchTracks().then(res => {
        dispatch(receiveTracks(res.tracks));
        dispatch(receiveArtists(res.artists));
        dispatch(receiveAlbums(res.albums));
    });
};

export const fetchFollowedTracks = () => dispatch => {
    return APIUtils.fetchFollowedTracks().then(res => {
        dispatch(receiveTracks(res.tracks));
        dispatch(receiveArtists(res.artists));
        dispatch(receiveAlbums(res.albums));
    });
};

export const followTrack = (userId, trackId) => dispatch => {
    return APIUtils.followTrack(userId, trackId).then(res => {
        dispatch(receiveTracks(res.tracks));
        dispatch(receiveArtists(res.artists));
        dispatch(receiveAlbums(res.albums));
    });
};

export const unfollowTrack = (userId, trackId) => dispatch => {
    return APIUtils.unfollowTrack(userId, trackId).then(res => {
        dispatch(receiveTracks(res.tracks));
        dispatch(receiveArtists(res.artists));
        dispatch(receiveAlbums(res.albums));
    });
};