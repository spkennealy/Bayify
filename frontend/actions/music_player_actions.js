export const PLAY_TRACK = 'PLAY_TRACK';
export const TOGGLE_PAUSE = 'TOGGLE_PAUSE';
export const NEXT_TRACK = 'NEXT_TRACK';
export const PREVIOUS_TRACK = 'PREVIOUS_TRACK';
export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE';
export const TOGGLE_REPEAT = 'TOGGLE_REPEAT';
export const SET_QUEUE = 'SET_QUEUE';
export const CLEAR_PLAYER = 'CLEAR_PLAYER';
// export const SAVE_TRACK = 'SAVE_SONG';
// export const UNSAVE_TRACK = 'UNSAVE_TRACK';

export const play = (track) => ({
    type: PLAY_TRACK,
    track
});

export const togglePause = () => ({
    type: TOGGLE_PAUSE
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

export const setQueue = (queue) => ({
    type: SET_QUEUE,
    queue
});

export const clearPlayer = () => ({
    type: CLEAR_PLAYER
});

// export const saveTrack = (id) => ({
//     type: SAVE_TRACK,
//     id
// });

// export const unsaveTrack = (id) => ({
//     type: UNSAVE_TRACK,
//     id
// });

