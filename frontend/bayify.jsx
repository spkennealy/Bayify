import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { closeWindowTimer } from './actions/session_actions';

// ------------------- TEST IMPORTS -------------------
import { followTrack, unfollowTrack } from './util/track_utils';
// ------------------- END -------------------

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // clearTimeout(closeWindowTimer);
    // console.log("Cleared the close window timer");

    // Bootstrap the user:
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);

        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // ------

    // ------------------- TESTS -------------------
    window.getState = store.getState;
    window.followTrack = followTrack;
    window.unfollowTrack = unfollowTrack;
    // ------------------- END -------------------
    
    ReactDOM.render(<Root store={store}/>, root);
});