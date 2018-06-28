import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import game from './game'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    base: 100,
  },
  modules: {
    home,
    game,
  },
})

export default store
