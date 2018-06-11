import axios from 'axios'

const baseURL = 'https://dog.ceo/api/breed'

function request({ method = 'GET', url, data, params }) {
  return axios({
    method,
    baseURL,
    url,
    data,
  })
    .then(response => Promise.resolve(response.data))
    .catch(response => {
      const { status } = response
      if (status === 400) console.log('400')
      throw new Error('error fetching')
    })
}

export default request
