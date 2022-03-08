const SET_TRUE = 'SET_TRUE'
const ADD_CITY_NAMES = 'ADD_CITY_NAMES'
const SET_CURRENT_CITY = 'SET_CURRENT_CITY'


type initialStateType = {
    isTrue: boolean
    arrCityNames: any
    currentCity: string
}

let initialState: initialStateType = {
    isTrue: false,
    arrCityNames: [],
    currentCity: ''
}

const PopUpReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {

        case ADD_CITY_NAMES:
            return { ...state, arrCityNames: [...state.arrCityNames, action.arrCityNames] }

        case SET_TRUE:
            return { ...state, isTrue: action.isTrue }

        case SET_CURRENT_CITY:
            return { ...state, currentCity: action.currentCity }

        default:
            return state;
    }
}

type ActionType = changeBooleanType | addCityInArrType | addCurrentCityType

type changeBooleanType = { type: typeof SET_TRUE, isTrue: boolean }
export const changeBooleanAc = (isTrue: boolean): changeBooleanType => ({ type: SET_TRUE, isTrue })

type addCityInArrType = { type: typeof ADD_CITY_NAMES, arrCityNames: any }
export const addCityInArrAc = (arrCityNames: any): addCityInArrType => ({ type: ADD_CITY_NAMES, arrCityNames })

type addCurrentCityType = { type: typeof SET_CURRENT_CITY, currentCity: string }
export const addCurrentCityAc = (currentCity: string): addCurrentCityType => ({ type: SET_CURRENT_CITY, currentCity })

export default PopUpReducer