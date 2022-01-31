import React, { useState } from "react"
import { useEffect } from 'react'
import { currentCity } from '../api/api'
import { getWeather } from "../api/api"
import { useDispatch, useSelector } from "react-redux"

import { addNewCityAc } from "../redux/reducers/MainReducer"

import Main from "./Main"



const MainContainer = () => {
    const [isTrue, setTrue] = useState<boolean>(false)

    useEffect(() => {
        currentCity()
            .then(res => {
                getWeather(res.city)
                    .then(res => {
                        setTrue(true)
                        addNewCityAc(res.name, new Date(), res.main.temp, res.weather[0].icon)
                    })
                    .catch(error => console.error('Error', error))

            })
            .catch(error => console.error('Error', error))

    }, [])

    console.log(new Date())


    return (
        <Main />
    )
}

// type MapStatePropsType = {
//     cityName: Array<string>
// }


// const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
//     return {
//         cityName: CityName(state)
//     }
// }

export default MainContainer