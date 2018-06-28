import { UPDATE_CONTENT } from './contants'
import { PuzzleService } from '@/api'

const state = {
  content: null,
}

const mutations = {
  [UPDATE_CONTENT](state, payload) {
    state.content = payload
  },
}

const actions = {
  async fetchGameContent(context, payload) {
    const content = await PuzzleService.getPuzzle({ id: payload })
    context.commit(UPDATE_CONTENT, content)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
