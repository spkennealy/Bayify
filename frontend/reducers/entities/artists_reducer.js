import { 
    RECEIVE_ARTISTS, 
    RECEIVE_ARTIST
} from '../../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    // debugger
    switch (action.type) {
        case RECEIVE_ARTISTS:
            return action.artists;
        case RECEIVE_ARTIST:
            newState = merge({}, state);
            newState[action.artist.id] = action.artist;
            return newState;
        default:
            return state;
    }
};

export default artistsReducer;