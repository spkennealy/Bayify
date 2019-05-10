import {
    RECEIVE_ALBUMS,
    RECEIVE_ALBUM
} from '../../actions/album_actions';
import merge from 'lodash/merge';

const albumsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let album;

    switch (action.type) {
        case RECEIVE_ALBUMS:
            if (!action.albums) return state;
            return action.albums;
        case RECEIVE_ALBUM:
            newState = merge({}, state);
            newState[Object.values(action.album)[0].id] = Object.values(action.album)[0];
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;