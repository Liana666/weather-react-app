import { TwoDay } from './../../types/type';
const SET_TRUE = 'SET_TRUE'
const ADD_DAY_WEATHER = 'ADD_DAY_WEATHER'


type initialStateType = {
    isTrue: boolean
    twoDayWeather: Array<TwoDay>
}

let initialState: initialStateType = {
    isTrue: false,
    twoDayWeather: [{
        sunrise: 0,
        sunset: 0,
        cityName: '',
        temp: 0,
        icon: '',
        date: 0
    }]
}

const CityDetailsReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {

        case SET_TRUE:
            return { ...state, isTrue: action.isTrue }

        case ADD_DAY_WEATHER:
            return { ...state, twoDayWeather: action.twoDayWeather }

        default:
            return state;
    }
}

type ActionType = changeClassType | addDayssWeatherType

type changeClassType = { type: typeof SET_TRUE, isTrue: boolean }
export const changeClassAc = (isTrue: boolean): changeClassType => ({ type: SET_TRUE, isTrue })

type addDayssWeatherType = { type: typeof ADD_DAY_WEATHER, twoDayWeather: Array<TwoDay> }
export const addDayssWeatherAc = (twoDayWeather: Array<TwoDay>): addDayssWeatherType => ({ type: ADD_DAY_WEATHER, twoDayWeather })


export default CityDetailsReducer