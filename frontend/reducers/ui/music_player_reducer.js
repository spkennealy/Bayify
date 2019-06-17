import { 
    PLAY_TRACK, TOGGLE_PAUSE, SET_QUEUE, CLEAR_PLAYER,
    NEXT_TRACK, PREVIOUS_TRACK, TOGGLE_SHUFFLE, TOGGLE_REPEAT,
    SAVE_TRACK, UNSAVE_TRACK 
} from '../../actions/music_player_actions';
import merge from 'lodash/merge';

const defaultState = {
    currentTrack: null,
    playing: false,
    shuffle: false,
    repeat: false,
    queue: [],
    previousTracks: [],
    shuffledQueue: [],
    paused: false
};

const shuffle = tracks => {
    for (let i = tracks.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [tracks[i], tracks[random]] = [tracks[random], tracks[i]];
    }
    return tracks;
};

const musicPlayerReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case PLAY_TRACK:
            newState = merge({}, state);
            newState.currentTrack = JSON.parse(JSON.stringify(action.track));
            newState.playing = true;
            newState.previousTracks.push(action.track);
            return newState;
        case TOGGLE_PAUSE: 
            newState = merge({}, state);
            newState.paused = !state.paused;
            return newState;
        case SET_QUEUE:
            newState = merge({}, state);
            newState.queue = action.queue;
            return newState;
        case NEXT_TRACK: 
            newState = merge({}, state);
            if (newState.repeat) {
                if (newState.queue.length > 0) {
                    const nextQueueTrack = (newState.suffle) ? 
                        newState.shuffledQueue.shift() : newState.queue.shift();
                    newState.previousTracks.push(newState.currentTrack);
                    newState.currentTrack = nextQueueTrack;
                    if (newState.suffle) {
                        newState.shuffledQueue.push(nextQueueTrack);
                    } else {
                        newState.queue.push(nextQueueTrack);
                    }
                    newState.playing = true;
                } else {
                    newState.previousTracks.push(newState.currentTrack);
                    newState.currentTrack = null;
                    newState.playing = false;
                }
            } else {
                if (newState.queue.length > 0) {
                    const nextQueueTrack = (newState.shuffle) ?
                        newState.shuffledQueue.shift() : newState.queue.shift();
                    newState.previousTracks.push(newState.currentTrack);
                    newState.currentTrack = nextQueueTrack;
                    newState.playing = true;
                } else {
                    newState.previousTracks.push(newState.currentTrack);
                    newState.currentTrack = null;
                    newState.playing = false;
                }
            }
            return newState;
        case PREVIOUS_TRACK: 
            newState = merge({}, state);
            if (newState.playing === true) {
                if (newState.previousTracks.length > 0) {
                    const previousPlayedTrack = newState.previousTracks.pop();
                    newState.currentTrack = previousPlayedTrack;
                    newState.playing = true;
                } else {
                    newState.currentTrack = null;
                    newState.playing = false;
                }
            } 
            return newState;
        case TOGGLE_SHUFFLE: 
            newState = merge({}, state);
            newState.shuffle = !state.shuffle;
            if (newState.shuffle === true) {
                newState.shuffledQueue = shuffle(newState.queue);
            } else {
                newState.shuffledQueue = [];
            }
            return newState;
        case TOGGLE_REPEAT: 
            newState = merge({}, state);
            newState.repeat = !newState.repeat;
            return newState;
        case CLEAR_PLAYER:
            // newState = merge({}, state);
            // newState.currentTrack = null;
            // newState.playing = false;
            // newState.paused = false;
            // newState.repeat = false;
            // return newState;
            return defaultState;
        // case SAVE_TRACK: 
        // case UNSAVE_TRACK: 
        default: 
            return state;
    }
};

export default musicPlayerReducer;