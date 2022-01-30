import { CityType } from "../../types/type"

const ADD_CITY_NAME = 'ADD_CITY_NAME'


type initialStateType = {
    city: Array<CityType>
}

let initialState: initialStateType = {
    city: [{
        cityName: '',
        date: '',
        degree: 0,
        icon: ''
    }]
}

const MainReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case ADD_CITY_NAME:
            return {
                ...state,
                cityName: action.cityName
            }

        default:
            return state;
    }
}

type addNewCityType = { type: typeof ADD_CITY_NAME, cityName: string }
export const addNewCityAc = (cityName: string): addNewCityType => ({ type: ADD_CITY_NAME, cityName })

export default MainReducer