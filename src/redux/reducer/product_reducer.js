import { SET_LOGIN, SET_PRODUCT_DETAILS } from "../action/product_action";


const initialState = {
    product: {},
    login: {}
}

export function useProduct(state = initialState, action) {

    switch (action.type) {
        case SET_PRODUCT_DETAILS:
            return { ...state, product: action.payload };
        case SET_LOGIN:
            return { ...state, login: action.payload }; 
        default:
            return state;
    }


}