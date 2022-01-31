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
        description: ''
    }]
}

const MainReducer = (state = initialState, action: addNewCityType) => {
    switch (action.type) {

        case ADD_NEW_CITY:
            return {
                city: [...state.city,
                {
                    cityName: action.cityName,
                    date: action.date,
                    degree: action.degree,
                    icon: action.icon,
                    description: action.description
                }
                ]
            }

        default:
            return state;
    }
}

type addNewCityType = { type: typeof ADD_NEW_CITY, cityName: string, date: string, degree: number, icon: string, description: string }
export const addNewCityAc = (cityName: string, date: string, degree: number, icon: string, description: string): addNewCityType => ({ type: ADD_NEW_CITY, cityName, date, degree, icon, description })

export default MainReducer