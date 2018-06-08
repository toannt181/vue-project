import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const molA = {
  namespaced: true,
  state: {
    number: 10,
  },
  mutations: {
    increase: function(state, payload) {
      state.number += payload
    },
  },
  actions: {
    add: function({ commit, rootState }) {
      commit('increase', rootState.base)
    },
  },
  getters: {
    normal(state, getters) {
      return Math.pow(getters.getNum, 2)
    },
    getNum(state) {
      return Math.sqrt(state.number)
    },
  },
}

const store = new Vuex.Store({
  state: {
    base: 100,
  },
  modules: {
    molA,
  },
})

export default store
