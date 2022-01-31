import React from "react"
import { CityType } from "../../types/type"

import trash from '../../icons/trash.svg'

import './Main.sass'

const Main: React.FC<CityType> = ({
    cityName,
    date,
    degree,
    icon,
    description
}) => {

    const imgLink = `http://openweathermap.org/img/wn/${icon}@2x.png`


    return (
        <div className="main">
            <div className="main_wrapper">
                <div className="main_wrapper__first">
                    <div className="main_wrapper__first__name">{cityName}</div>
                    <div className="main_wrapper__first__date">{date}</div>
                </div>
                <div className="main_wrapper__second">
                    <div className="main_wrapper__second__degree">{Math.round(degree - 273)}</div>
                    <div className="main_wrapper__second__icon">
                        <img src={imgLink} alt="" />
                        {description}
                    </div>

                </div>
            </div>
            <img src={trash} alt="" />
        </div>

    )
}

export default Main