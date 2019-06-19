import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { logout } from './actions/session_actions';

// ------------------- TEST IMPORTS -------------------
import { followArtist, unfollowArtist } from './util/artist_utils';
// ------------------- END -------------------

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    
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

        // Auto logout:
        const timer = () => setTimeout(logout(), 5 * 60 * 60 * 1000);
        let currTimer = timer();
        const resetTimeout = () => {
            clearTimeout(currTimer);
            currTimer = timer();
        };
        const events = ["load", "mousemove", "mousedown", "click", "scroll", "keypress"];
        events.forEach(event => {
            window.addEventListener(event, () => {
                resetTimeout();
            });
        });
        setInterval(console.log(currTimer), 1000);
        // ------

        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // ------

    // ------------------- TESTS -------------------
    window.getState = store.getState;
    window.followArtist = followArtist;
    window.unfollowArtist = unfollowArtist;
    // ------------------- END -------------------
    
    ReactDOM.render(<Root store={store}/>, root);
});
