import axios from 'axios'
import { baseURL } from './contants'

function request({ method = 'GET', url, data, params }) {
  return axios({
    method,
    baseURL,
    url,
    data,
    params,
  })
    .then(response => Promise.resolve(response.data))
    .catch(response => {
      const { status } = response
      if (status === 400) console.log('400')
      throw new Error('error fetching')
    })
}

export default request
