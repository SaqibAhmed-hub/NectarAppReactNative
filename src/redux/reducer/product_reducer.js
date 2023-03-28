import { SET_PRODUCT_DETAILS } from "../action/product_action";


const initialState = {
    product: {}
}

export function useProduct(state = initialState, action) {

    switch (action.type) {
        case SET_PRODUCT_DETAILS:
            return { ...state, product: action.payload };

        default:
            return state;
    }


}