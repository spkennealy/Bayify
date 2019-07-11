import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
var http = require("http");
// import { closeWindowTimer } from './actions/session_actions';

// ------------------- TEST IMPORTS -------------------
// import { fetchGenresPlaylists } from './util/playlist_utils';
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
    // window.fetchGenresPlaylists = fetchGenresPlaylists;
    // ------------------- END -------------------
    
    ReactDOM.render(<Root store={store}/>, root);
});

// Ping website every 5 minutes to keep heroku site awake.
setInterval(function () {
    console.log("Making http request");
    http.get("http://bayify.herokuapp.com/#/");
}, 300000); 