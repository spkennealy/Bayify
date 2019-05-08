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
            return action.albums;
        case RECEIVE_ALBUM:
            newState = merge({}, state);
            // debugger;
            // album = Object.values(action.album)[0];
            newState[Object.values(action.album)[0].id] = Object.values(action.album)[0];
            return newState;
        default:
            return state;
    }
};

export default albumsReducer;