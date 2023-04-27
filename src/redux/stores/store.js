import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { userLogin } from "../reducer/product_reducer";
import { getSignUp } from "../reducer/signUpReducer";


const rootReducer = combineReducers({
    userLogin,
    getSignUp
});

export const store = createStore(rootReducer,applyMiddleware(thunk));