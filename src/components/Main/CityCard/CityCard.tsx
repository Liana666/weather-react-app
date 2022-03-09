import React from "react"
import { CityType } from "../../../types/type"
import { getWeatherIcons } from "../../../weatherIcon/weatherIcon"
import { removeCityAc } from "../../../redux/reducers/MainReducer"
import { changeClassAc } from "../../../redux/reducers/CityDetailsReducer"
import { addDayssWeatherAc } from "../../../redux/reducers/CityDetailsReducer"
import { getTwoDayweather } from "../../../api/api"
import trash from "../../../icons/trash.svg"

import './CityCard.sass'
import { useDispatch } from "react-redux"

const CityCard: React.FC<CityType> = ({
    cityName,
    date,
    degree,
    icon,
    description
}) => {

    const dispatch = useDispatch()

    const removeCity = () => {
        dispatch(removeCityAc(cityName))
    }

    const openCityDetails = () => {
        let daysWeather: any = []


        dispatch(changeClassAc(true))
        getTwoDayweather(cityName)
            .then(res => {
                res.list.map((item: any, index: any, array: any) => {
                    if (index === 0 || index === array.length - 1) {
                        let obj = {
                            sunrise: res.city.sunrise,
                            sunset: res.city.sunset,
                            cityName: res.city.name,
                            temp: item.main.temp,
                            icon: item.weather[0].icon,
                            date: index === 0 ? 'Сегодня' : 'Завтра'
                        }
                        daysWeather.push(obj)
                        console.log(daysWeather)
                    }
                })
                dispatch(addDayssWeatherAc(daysWeather))
            })
            .catch(error => console.error('Error', error))
    }


    return (
        <div className="main">
            <div onClick={openCityDetails} className="main_wrapper">
                <div className="main_wrapper__first">
                    <div className="main_wrapper__first__name">{cityName}</div>
                    <div className="main_wrapper__first__date">{date}</div>
                </div>
                <div className="main_wrapper__second">
                    <div className="main_wrapper__second__degree">
                        <div className="second__degree__title">{Math.round(degree - 273)}</div>
                        <div className="second__degree__description">{description}</div>
                    </div>
                    <div className="main_wrapper__second__icon">
                        <img src={getWeatherIcons(icon)} alt="" />
                    </div>

                </div>
            </div>
            <img onClick={removeCity} className="trash" src={trash} alt={cityName} />
        </div>

    )
}

export default CityCard