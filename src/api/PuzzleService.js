import request from './request'

function getPuzzle({ id }) {
  return request({
    url: `puzzle/${id}`,
  })
}

export default { getPuzzle }
