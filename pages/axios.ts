import axios from 'axios'

const BaseAxios = axios.create()

BaseAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.baseURL = 'https://mygf-api.herokuapp.com'
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

export default BaseAxios