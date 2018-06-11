import request from './request'

function fetchDogByType(type = 'akita') {
  return request({
    url: `${type}/images`,
  })
}

export default { fetchDogByType }
