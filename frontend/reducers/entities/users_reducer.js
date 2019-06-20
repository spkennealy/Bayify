import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { REMOVE_TRACK, ADD_TRACK } from '../../actions/track_actions';
import merge from 'lodash/merge';
import { RECEIVE_PLAYLIST_CURATOR } from '../../actions/playlist_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let user;
    let newState;

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return merge({}, state, { [action.user.id]: action.user });
        case RECEIVE_PLAYLIST_CURATOR:
            user = Object.values(action.user)[0];
            return merge({}, state, { [user.id]: user });
        case ADD_TRACK:
            newState = merge({}, state);
            newState[action.userId].savedTracks.push(action.trackId);
            return newState; 
        case REMOVE_TRACK:
            newState = merge({}, state);
            const editedSavedTracks = newState[action.userId].savedTracks;
            
            let index = editedSavedTracks.indexOf(action.trackId);
            if (index > -1) {
                editedSavedTracks.splice(index, 1);
            }

            newState[action.userId].savedTracks = editedSavedTracks;
            return newState; 
        default:
            return state;
    }
};

export default usersReducer;