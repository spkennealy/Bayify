import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TEST IMPORTS
import { signup, login, logout } from './util/session_api_utils';
// END

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

    // TESTS
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.disptach = store.disptach;
    // END
    
    ReactDOM.render(<Root store={store}/>, root);
});
