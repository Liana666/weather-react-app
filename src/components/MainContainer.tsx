import React, { useState } from "react"
import { useEffect } from 'react'
import { AppStateType } from '../redux/store'

import { currentCity } from '../api/api'
import { useDispatch, useSelector } from "react-redux"

import { addNewCityAc } from "../redux/reducers/MainReducer"

import Main from "./Main"



const MainContainer = () => {
    const [city, setCity] = useState<string>('')
    const cityNames = useSelector((state: AppStateType) => state.MainPage.city.map(city => city.cityName))
    const dispatch = useDispatch()

    // useEffect(() => {
    //     currentCity().then(res => {
    //         setCity(res.city)
    //     })
    // }, [])

    // if (city !== '') {
    //     dispatch(addNewCityAc(cityNames))
    // }

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