import React from 'react'
import { AppStateType } from '../../redux/store'
import { useSelector } from 'react-redux'
import "./CityDetails.sass"
import CityItem from './CityItem/CityItem'


type CityDetailType = {}

const CityDetails: React.FC<CityDetailType> = () => {
    const daysWeather = useSelector((state: AppStateType) => state.CityDetails.twoDayWeather)
    return (
        <section className="newCity">
            <div className="newCity__wrapper">
                <div className="newCity__title">
                    <span style={{ fontSize: 22 }}>Ваш город: </span><span>{daysWeather[0].cityName}</span>
                </div>
                {daysWeather.length > 1 ?
                    daysWeather.map(item => <CityItem {...item} />)
                    : null}

            </div>
        </section>
    )
}

export default CityDetails;
