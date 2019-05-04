export const PLAY_TRACK = 'PLAY_TRACK';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREVIOUS_TRACK = 'PREVIOUS_TRACK';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';
export const TOGGLE_REPEAT = 'TOGGLE_REPEAT';
export const SAVE_TRACK = 'SAVE_SONG';
export const UNSAVE_TRACK = 'UNSAVE_TRACK';
// NEED TO ADD QUEUE ACTIONS
export const QUEUE = 'QUEUE';
// --------------------------

export const play = () => ({
    type: PLAY_TRACK
});

export const pause = () => ({
    type: PAUSE_TRACK
});

export const setCurrentTrack = (id) => ({
    type: SET_CURRENT_TRACK,
    id
});

export const nextTrack = () => ({
    type: NEXT_TRACK
});

export const previousTrack = () => ({
    type: PREVIOUS_TRACK
});

export const toggleShuffle = () => ({
    type: TOGGLE_SHUFFLE
});

export const toggleRepeat = () => ({
    type: TOGGLE_REPEAT
});

export const saveTrack = (id) => ({
    type: SAVE_TRACK,
    id
});

export const unsaveTrack = (id) => ({
    type: UNSAVE_TRACK,
    id
});

