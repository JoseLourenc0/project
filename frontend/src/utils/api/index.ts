import VARS from '../environment'
import axios from 'axios'

const instance = axios.create({
    baseURL: VARS.API_URL
})

export default {
    get: (url: string) => instance({
        method: 'GET',
        url :  url
    })
}