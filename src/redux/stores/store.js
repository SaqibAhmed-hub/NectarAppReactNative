import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
// import {useProduct}  from "../reducer/product_reducer";
import { useProduct } from "../reducer/product_reducer";


const rootReducer = combineReducers({useProduct});

export const store = createStore(rootReducer,applyMiddleware(thunk));