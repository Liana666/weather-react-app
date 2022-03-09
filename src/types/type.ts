import { addNewCityAc } from "../redux/reducers/MainReducer"

export type CityType = {
    cityName: string,
    date: string,
    degree: number,
    icon: string,
    description: string,
    sunrise?: string | number,
    sunset?: string | number
}

export type TwoDay = {
    cityName: string,
    temp: number,
    icon: string,
    date: any,
    sunrise: number,
    sunset: number
}

export type MainType = {
    isTrue: boolean

}