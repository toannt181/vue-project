import DogApi from '@/api/DogApi'

import { UPDATE_CATS_LIST, TYPES } from './contants'

const state = {
  list: [],
  types: Object.keys(TYPES),
}

const mutations = {
  [UPDATE_CATS_LIST](state, payload) {
    state.list = payload
  },
}

const actions = {
  async getCats(context, payload) {
    try {
      context.commit(UPDATE_CATS_LIST, [])
      const { message } = await DogApi.fetchDogByType(payload)
      context.commit(UPDATE_CATS_LIST, message)
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
