import { GamesService } from '@/api'
import { UPDATE_GAMES } from './contants'

const state = {
  games: [],
}

const mutations = {
  [UPDATE_GAMES](state, payload) {
    state.games = payload
  },
}

const actions = {
  async fetchListGames(context, payload) {
    try {
      context.commit(UPDATE_GAMES, [])
      const games = await GamesService.getListGames(payload)
      context.commit(UPDATE_GAMES, games)
    } catch (e) {
      console.error(e)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
