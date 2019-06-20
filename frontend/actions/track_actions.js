import * as APIUtils from '../util/track_utils';
import { receiveArtists } from './artist_actions';
import { receiveAlbums } from './album_actions';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const ADD_TRACK = 'ADD_TRACK';

export const receiveTracks = (tracks) => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const addTrackToUser = (userId, trackId) => ({
    type: ADD_TRACK,
    trackId,
    userId
});

export const removeTrack = (userId, trackId) => ({
    type: REMOVE_TRACK, 
    trackId,
    userId
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
    return APIUtils.followTrack(userId, trackId).then(user => {
        dispatch(addTrackToUser(userId, trackId));
    });
};

export const unfollowTrack = (userId, trackId) => dispatch => {
    return APIUtils.unfollowTrack(userId, trackId).then(() => {
        dispatch(removeTrack(userId, trackId));
    });
};