import { combineReducers, createStore } from "redux"

import MainReducer from "./reducers/MainReducer"
import PopUpReducer from "./reducers/PopUpReducer"

let reducers = combineReducers({
    MainPage: MainReducer,
    PopUp: PopUpReducer
})

type Reducers = typeof reducers;
export type AppStateType = ReturnType<Reducers>;

const store = createStore(reducers);


export default store