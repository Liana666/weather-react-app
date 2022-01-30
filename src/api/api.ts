import axios from "axios"

export const currentCity = () => {
    return axios.get('http://ipwhois.app/json/')
        .then(res => {
            return res.data
        })
}
