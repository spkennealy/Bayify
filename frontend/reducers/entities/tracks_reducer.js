import {
    RECEIVE_TRACKS
} from '../../actions/track_actions';
// import merge from 'lodash/merge';

const tracksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    // debugger;

    switch (action.type) {
        case RECEIVE_TRACKS:
            return action.tracks;
        default:
            return state;
    }
};

export default tracksReducer;