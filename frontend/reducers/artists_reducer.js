import { 
    RECEIVE_ARTISTS, 
    RECEIVE_ARTIST
} from '../actions/artist_actions';
// import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            return action;
        default:
            return state;
    }
};

export default artistsReducer;