import request from './request'

function getListGames() {
  return request({
    url: 'list-game',
  })
}

export default { getListGames }
