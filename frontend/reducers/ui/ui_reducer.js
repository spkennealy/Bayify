import { combineReducers } from 'redux';
import musicPlayerReducer from './music_player_reducer';

const uiReducer = combineReducers({
    musicPlayer: musicPlayerReducer
});

export default uiReducer;