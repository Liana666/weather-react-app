import axios from "axios"

const apiKey = 'ac34c61063e9edd4959305c166f426b4'

export const currentCity = () => {
    return axios.get('http://ipwhois.app/json/')
        .then(res => {
            return res.data
        })
}


export const getWeather = (city: any) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru`)
        .then(res => {
            return res.data
        })
}
