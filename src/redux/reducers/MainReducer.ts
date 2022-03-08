import { CityType } from "../../types/type"

const ADD_NEW_CITY = 'ADD_NEW_CITY'
const REMOVE_CITY = 'REMOVE_CITY'


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

        case ADD_NEW_CITY: {
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
        }

        case REMOVE_CITY: {
            const newCityArr = state.city.filter(
                (item) => item.cityName !== action.city
            )

            return {
                ...state,
                city: newCityArr
            }
        }

        default:
            return state;
    }
}

type ActionType = addNewCityType | removeCityType

type addNewCityType = { type: typeof ADD_NEW_CITY, cityName: string, date: string, degree: number, icon: string, description: string, sunrise: string | number, sunset: string | number }
export const addNewCityAc = (cityName: string, date: string, degree: number, icon: string, description: string, sunrise: string | number, sunset: string | number): addNewCityType => ({ type: ADD_NEW_CITY, cityName, date, degree, icon, description, sunrise, sunset })

type removeCityType = { type: typeof REMOVE_CITY, city: string }
export const removeCityAc = (city: string): removeCityType => ({ type: REMOVE_CITY, city })

export default MainReducer