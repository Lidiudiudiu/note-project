import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use((config) => {
    return config
})

axios.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default axios