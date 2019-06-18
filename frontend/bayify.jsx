import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// ------------------- TEST IMPORTS -------------------
import { fetchFeaturedAlbums } from './util/album_utils';
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
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // ------------------- TESTS -------------------
    window.getState = store.getState;
    window.fetchFeaturedAlbums = fetchFeaturedAlbums;
    // ------------------- END -------------------
    
    ReactDOM.render(<Root store={store}/>, root);
});
