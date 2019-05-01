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

export const login = user => dispatch => {
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