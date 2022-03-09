import React from 'react'
import { getWeatherIcons } from '../../../weatherIcon/weatherIcon'
import { TwoDay } from '../../../types/type'
import Subtract from '../../../icons/Subtract.svg'
import Sunset from '../../../icons/sunset.svg'
import Sunrise from '../../../icons/sunrise.svg'
import './CityItem.sass'

const CityItem: React.FC<TwoDay> = ({
    sunrise,
    sunset,
    temp,
    icon,
    date
}) => {

    const sunriseTime = new Date(sunrise * 1000)
    const sunsetTime = new Date(sunset * 1000)

    return (
        <div className="cityitem">
            <div className="cityitem__wrapper">
                <div className="cityitem__info">
                    <div className="cityitem__date">{date}</div>
                    <div className="cityitem__temp">{Math.round(temp - 273)}</div>
                </div>
                <div className="cityitem__img">
                    <img src={getWeatherIcons(icon)} alt="" />
                </div>
            </div>
            <div className="cityitem__wrapper">
                <div className="cityitem__cicle">
                    <img src={Subtract} alt="" />
                    <span className='cityitem__start'>00:00</span>
                    <span className='cityitem__end'>23:59</span>
                    <img style={{ left: sunriseTime.getHours() * 4 + '%' }} className='cityitem__sunrise' src={Sunrise} alt=''></img>
                    <img style={{ left: sunsetTime.getHours() * 4 + '%' }} className='cityitem__sunset' src={Sunset} alt=''></img>
                </div>
                {/* {sunriseTime.getHours() + ':' + sunriseTime.getMinutes() + ':' + sunriseTime.getSeconds()}
                <br />
                {sunsetTime.getHours() + ':' + sunsetTime.getMinutes() + ':' + sunsetTime.getSeconds()} */}
            </div>
        </div>
    )
}

export default CityItem;
