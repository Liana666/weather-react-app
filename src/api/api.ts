import axios from "axios"

const apiKey = 'fadb13ba387f5b23b335c73b7fdb9e4d'

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
