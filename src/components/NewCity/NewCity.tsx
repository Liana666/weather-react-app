import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeBooleanAc } from '../../redux/reducers/PopUpReducer'
import { addCurrentCityAc } from '../../redux/reducers/PopUpReducer'
import "./NewCity.sass"
import close from "../../icons/close.svg"
import girl from "../../img/girl2.png"


type NewCityType = {}

const NewCity: React.FC<NewCityType> = () => {
    const dispatch = useDispatch()
    const [newCity, setNewCity] = useState('')
    const [cityCode, setCityCode] = useState<string | number>('')
    const [contryCode, setCountryCode] = useState<string | number>('')

    const closePopUp = () => { dispatch(changeBooleanAc(false)) }
    const addNewCityName = (e: React.ChangeEvent<HTMLInputElement>) => { setNewCity(e.target.value) }
    const addCityCode = (e: React.ChangeEvent<HTMLInputElement>) => { setCityCode(e.target.value) }
    const addCountryCode = (e: React.ChangeEvent<HTMLInputElement>) => { setCountryCode(e.target.value) }
    const addNewCity = () => {
        dispatch(addCurrentCityAc(newCity))
        dispatch(changeBooleanAc(false))
    }

    return (
        <section className="newCity">
            <div className="newCity__wrapper">
                <div
                    onClick={closePopUp}
                    className="newCity__close">
                    <img
                        src={close}
                        alt=""
                    />
                </div>
                <div className="newCity__title">
                    <span>Добавить город</span>
                </div>
                <div className="newCity__item">
                    <div className="form">
                        <input
                            onChange={addNewCityName}
                            value={newCity}
                            placeholder="Город:"
                            type="text"
                            name="city"
                            className="newCity__city"
                        />
                        <input
                            value={cityCode}
                            onChange={addCityCode}
                            placeholder="Код города:"
                            type="number" name="code"
                            className="newCity__code"
                        />
                        <input
                            value={contryCode}
                            onChange={addCountryCode}
                            placeholder="Код страны:"
                            type="number"
                            name="code-country"
                            className="newCity__code"
                        />
                        <button onClick={addNewCity}>Сохранить</button>
                    </div>
                    <div className="newCity__img">
                        <img
                            src={girl}
                            alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewCity;
