import axios from 'axios'

const baseURL = 'https://dog.ceo/api/breed'

function request({ method = 'GET', url, data, params }) {
  axios({
    method,
    baseURL,
    url,
    data,
  })
    .then((response) => response.data)
    .catch((response) => {
      const { status } = response
      if (status === 400) console.log('400')
      console.log('error fetching')
    })
}

export default request
