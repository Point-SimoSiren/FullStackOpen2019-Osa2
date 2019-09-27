import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/all'

const getAll = async () => {
    const req = axios.get(baseUrl)
    const res = await req
    return res.data
}

export default {
    getAll
}