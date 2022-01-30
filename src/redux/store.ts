import { combineReducers, createStore } from "redux";

import MainReducer from "./reducers/MainReducer";

let reducers = combineReducers({
    MainPage: MainReducer
})

type Reducers = typeof reducers;
export type AppStateType = ReturnType<Reducers>;

const store = createStore(reducers);


export default store