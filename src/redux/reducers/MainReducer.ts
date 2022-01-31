import { CityType } from "../../types/type"

const ADD_NEW_CITY = 'ADD_NEW_CITY'


type initialStateType = {
    city: Array<CityType>
}

let initialState: initialStateType = {
    city: [{
        cityName: '',
        date: {},
        degree: 0,
        icon: ''
    }]
}

const MainReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case ADD_NEW_CITY:
            return {
                city: [...state.city,
                {
                    cityName: action.cityName,
                    date: action.date,
                    degree: action.degree,
                    icon: action.icon
                }
                ]
            }

        default:
            return state;
    }
}

type addNewCityType = { type: typeof ADD_NEW_CITY, cityName: string, date: object, degree: number, icon: string }
export const addNewCityAc = (cityName: string, date: object, degree: number, icon: string): addNewCityType => ({ type: ADD_NEW_CITY, cityName, date, degree, icon })

export default MainReducer