import * as APIUtils from '../util/track_utils';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = (tracks) => ({
    type: RECEIVE_TRACKS,
    tracks
});

export const fetchTracks = () => dispatch => {
    APIUtils.fetchTracks().then(tracks => (
        dispatch(receiveTracks(tracks))
    ));
};
