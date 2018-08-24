import GamesService from './GamesService'
import Request from './request'

export { GamesService }

export const fetchItem = () => {
  return Request({ url: 'realestate' })
}
