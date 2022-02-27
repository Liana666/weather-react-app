import React from "react"
import { CityType } from "../../types/type"
import CityCard from "./CityCard/CityCard"

import "./Main.sass"

const Main: React.FC<CityType> = ({
    cityName,
    date,
    degree,
    icon,
    description
}) => {

    return (
        <>
            <CityCard
                cityName={cityName}
                date={date}
                degree={degree}
                icon={icon}
                description={description}
            />
        </>

    )
}

export default Main