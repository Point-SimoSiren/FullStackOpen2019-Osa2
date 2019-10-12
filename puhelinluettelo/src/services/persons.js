import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = async () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = newContact => {
    return axios.post(baseUrl, newContact)
}

const update = async (id, changedContact) => {
    const req = axios.put(`${baseUrl}/${id}`, changedContact)
    const res = await req
    return res.data
}

const remove = id => axios.delete(`${baseUrl}/${id}`)

export default {
    getAll,
    create,
    update,
    remove
}