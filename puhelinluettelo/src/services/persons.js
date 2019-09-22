import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newContact => {
    return axios.post(baseUrl, newContact)
}

const update = (id, newContact) => {
    return axios.put(`${baseUrl}/${id}`, newContact)
}

const remove = id => axios.delete(`${baseUrl}/${id}`)

export default {
    getAll,
    create,
    update,
    remove
}