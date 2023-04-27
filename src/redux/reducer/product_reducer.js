import { SET_LOGIN } from "../action/product_action";

const initialState = {
    login: {}
}

export function userLogin(state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, login: action.payload };
        default:
            return state;
    }


}