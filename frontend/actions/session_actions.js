import * as APIUtils from '../util/session_api_utils';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    user: currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
});

// export let closeWindowTimer = () => {
//     console.log("The close window timer is set");
//     setTimeout(logout, 30 * 1000);
// };

export const login = user => dispatch => {
    // Auto logout after inactivity:
    // const inactiveTimer = () => {
    //     setTimeout(logout, 20 * 1000);
    //     console.log("The inactivity timer set");
    // };
    // let currTimer = inactiveTimer();

    // const resetTimeout = () => {
    //     console.log("The inactivity timer is reset");
    //     clearTimeout(inactiveTimer);
    //     currTimer = inactiveTimer();
    // };
    // const events = ["load", "mousemove", "mousedown", "click", "scroll", "keypress"];
    // events.forEach(event => {
    //     document.addEventListener(event, () => {
    //         resetTimeout();
    //     });
    // });

    // document.onunload = () => {
    //     console.log("Close window timer is set on unload");
    //     closeWindowTimer();
    // };
    // --------

    APIUtils.login(user).then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};

export const logout = () => dispatch => {
    APIUtils.logout()
        .then(() => dispatch(logoutCurrentUser()));
};

export const signup = user => dispatch => {
    APIUtils.signup(user).then(currentUser => (
        dispatch(receiveCurrentUser(currentUser))
    ), error => (
        dispatch(receiveErrors(error.responseJSON))
    ));
};