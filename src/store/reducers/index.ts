import { productReducer } from './productReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    products: productReducer
})

export type RootState = ReturnType<typeof rootReducer>