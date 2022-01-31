import axios from "axios"

const apiKey = '35738bcc841b667fe31c3218b17e5576'

export const currentCity = () => {
    return axios.get('http://ipwhois.app/json/')
        .then(res => {
            return res.data
        })
}


export const getWeather = (city: string) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru`)
        .then(res => {
            return res.data
        })
}
