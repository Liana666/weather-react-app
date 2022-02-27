import { CityType } from "../../types/type"

const ADD_NEW_CITY = 'ADD_NEW_CITY'


type initialStateType = {
    city: Array<CityType>
}

let initialState: initialStateType = {
    city: [{
        cityName: '',
        date: '',
        degree: 0,
        icon: '',
        description: '',
        sunrise: 0,
        sunset: 0
    }]

}

const MainReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {

        case ADD_NEW_CITY:
            return {
                ...state,
                city: [...state.city,
                {
                    cityName: action.cityName,
                    date: action.date,
                    degree: action.degree,
                    icon: action.icon,
                    description: action.description,
                    sunrise: action.sunrise,
                    sunset: action.sunset
                }
                ]
            }

        default:
            return state;
    }
}

type ActionType = addNewCityType

type addNewCityType = { type: typeof ADD_NEW_CITY, cityName: string, date: string, degree: number, icon: string, description: string, sunrise: string | number, sunset: string | number }
export const addNewCityAc = (cityName: string, date: string, degree: number, icon: string, description: string, sunrise: string | number, sunset: string | number): addNewCityType => ({ type: ADD_NEW_CITY, cityName, date, degree, icon, description, sunrise, sunset })


export default MainReducer