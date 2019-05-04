import { 
    PLAY_TRACK, PAUSE_TRACK, SET_CURRENT_TRACK,
    NEXT_TRACK, PREVIOUS_TRACK, TOGGLE_SHUFFLE, TOGGLE_REPEAT,
    SAVE_TRACK, UNSAVE_TRACK 
} from '../../actions/music_player_actions';
import merge from 'lodash/merge';

const defaultState = {
    currentTrackId: null,
    playing: false,
    shuffle: false,
    repeat: false,
    queue: []
};

const musicPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case PLAY_TRACK:
            newState = merge({}, state);
            if (newState.currentTrackId) newState.playing = true;
            return newState;

        case PAUSE_TRACK: 
            newState = merge({}, state);
            newState.playing = false;
            return newState;

        case SET_CURRENT_TRACK: 
            newState = merge({}, state);
            newState.currentTrackId = action.trackId;
            return newState;

        // case NEXT_TRACK: 

        // case PREVIOUS_TRACK: 
        // case TOGGLE_SHUFFLE: 
        // case TOGGLE_REPEAT: 
        // case SAVE_TRACK: 
        // case UNSAVE_TRACK: 
        default: 
            return state;
    }
};

export default musicPlayerReducer;