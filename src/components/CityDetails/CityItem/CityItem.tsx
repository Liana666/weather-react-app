import React from 'react'
import { getWeatherIcons } from '../../../weatherIcon/weatherIcon';
import { TwoDay } from '../../../types/type';

import './CityItem.sass'

const CityItem: React.FC<TwoDay> = ({
    cityName,
    temp,
    icon,
    date
}) => {

    return (
        <div className="cityitem">
            <div className="cityitem__wrapper">
                <div className="cityitem__info">
                    <div className="cityitem__date">{date.toString().slice(0, 11)}</div>
                    <div className="cityitem__temp">{Math.round(temp - 273)}</div>
                </div>
                <div className="cityitem__img">
                    <img src={getWeatherIcons(icon)} alt="" />
                </div>
            </div>

        </div>
    )
}

export default CityItem;
