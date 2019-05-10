import { 
    RECEIVE_ARTISTS, 
    RECEIVE_ARTIST
} from '../../actions/artist_actions';
import merge from 'lodash/merge';

const artistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ARTISTS:
            if (!action.artists) return state;
            return action.artists;
        case RECEIVE_ARTIST:
            newState = merge({}, state);
            let artist = Object.values(action.artist)[0];
            newState[artist.id] = artist;
            return newState;
        default:
            return state;
    }
};

export default artistsReducer;