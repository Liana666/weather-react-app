import React, { useState } from "react"
import { useEffect } from 'react'
import { currentCity } from '../../api/api'
import { getWeather } from "../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { AppStateType } from "../../redux/store"

import { addNewCityAc } from "../../redux/reducers/MainReducer"

import Main from "./Main"


const MainContainer = () => {

    const options: any = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timezone: 'UTC'
    }

    let dispatch = useDispatch()
    let objectCity = useSelector((state: AppStateType) => state.MainPage.city);

    useEffect(() => {
        currentCity()
            .then(res => {
                getWeather(res.city)
                    .then(res => {
                        dispatch(addNewCityAc(res.name, new Date().toLocaleString("ru", options), res.main.temp, res.weather[0].icon, res.weather[0].description))
                    })
                    .catch(error => console.error('Error', error))

            })
            .catch(error => console.error('Error', error))

    }, [])


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