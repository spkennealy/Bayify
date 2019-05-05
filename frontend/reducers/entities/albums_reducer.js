import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM
} from '../../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;

    switch (action.type) {
        case RECEIVE_ALBUMS:
            return action.albums;
        case RECEIVE_ALBUM:
            newState = merge({}, state);
            newState[action.album.id] = action.album;
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;