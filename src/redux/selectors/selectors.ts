import { AppStateType } from "../store";

export const CityName = (state: AppStateType) => {
    return state.MainPage.city.map(city => city.cityName);
}