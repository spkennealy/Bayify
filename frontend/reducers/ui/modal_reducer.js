import { CLOSE_MODAL, OPEN_MODAL } from '../../actions/modal_actions';

const modalReducer = (state = false, action) => {
    Object.freeze(state);

    switch (action.type) {
        case OPEN_MODAL:
            return true;
        case CLOSE_MODAL:
            return false;
        default:
            return false;
    }
};

export default modalReducer;