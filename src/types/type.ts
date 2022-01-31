import { addNewCityAc } from "../redux/reducers/MainReducer"

export type CityType = {
    cityName: string,
    date: string,
    degree: number,
    icon: string,
    description: string
}

export type MainType = {
    isTrue: boolean

}