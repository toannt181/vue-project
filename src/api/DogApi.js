import request from './request'

function fetchDogByType(type) {
  const t = request({
    url: `${type}/images`,
  })
  console.log(t)
}

export { fetchDogByType }
