import { combineReducers, createStore } from "redux"

import MainReducer from "./reducers/MainReducer"
import PopUpReducer from "./reducers/PopUpReducer"
import CityDetailsReducer from "./reducers/CityDetailsReducer"

let reducers = combineReducers({
    MainPage: MainReducer,
    PopUp: PopUpReducer,
    CityDetails: CityDetailsReducer
})

type Reducers = typeof reducers;
export type AppStateType = ReturnType<Reducers>;

const store = createStore(reducers);


export default store