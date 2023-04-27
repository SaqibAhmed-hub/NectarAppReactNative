import { SIGNUP_REMOVE, SIGNUP_SUCCESS } from "../action/signUpAction";

const initialState = {
    signUp: {}
}

export function getSignUp(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return { ...state, signUp: action.payload };
        case SIGNUP_REMOVE:
            return { ...state, signUp: {} };
        default:
            return state;
    }
}