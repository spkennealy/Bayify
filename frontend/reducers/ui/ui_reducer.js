import { combineReducers } from 'redux';
import musicPlayerReducer from './music_player_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    musicPlayer: musicPlayerReducer,
    modal: modalReducer
});

export default uiReducer;