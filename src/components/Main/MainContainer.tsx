import { useEffect } from 'react'
import { currentCity } from '../../api/api'
import { getWeather } from "../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../../redux/store"
import { addNewCityAc } from "../../redux/reducers/MainReducer"
import { addCityInArrAc } from '../../redux/reducers/PopUpReducer'
import { addCurrentCityAc } from '../../redux/reducers/PopUpReducer'

import Main from "./Main"


const MainContainer = () => {
    const options: any = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    }

    const dispatch = useDispatch()
    const objectCity = useSelector((state: AppStateType) => state.MainPage.city)
    const currentCityString = useSelector((state: AppStateType) => state.PopUp.currentCity)

    useEffect(() => {
        currentCity()
            .then(res => {
                dispatch(addCityInArrAc(res.city))
                localStorage.setItem('cities', JSON.stringify([res.city]));
                dispatch(addCurrentCityAc(res.city))
            })
            .catch(error => console.error('Error', error))
    }, [])

    console.log(objectCity)

    useEffect(() => {
        if (currentCityString !== '') {
            getWeather(currentCityString)
                .then(res => {
                    const sunrise = new Date(res.sys.sunrise * 1000)
                    const sunset = new Date(res.sys.sunset * 1000)

                    dispatch(addNewCityAc(res.name,
                        new Date().toLocaleString("ru", options),
                        res.main.temp,
                        res.weather[0].icon,
                        res.weather[0].description,
                        sunrise.getHours() + ':' + sunrise.getMinutes() + ':' + sunrise.getSeconds(),
                        sunset.getHours() + ':' + sunset.getMinutes() + ':' + sunset.getSeconds(),
                    ))
                })
                .catch(error => console.error('Error', error))
        }
    }, [currentCityString])

    return (
        <>
            {objectCity.length > 1 ?
                objectCity.map(city => {
                    if (city.cityName !== '') return <Main {...city} />
                })
                : null}
        </>
    )
}


export default MainContainer