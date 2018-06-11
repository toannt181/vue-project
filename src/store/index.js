import Vue from 'vue'
import Vuex from 'vuex'

import cats from './modules/cats'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    base: 100,
  },
  modules: {
    cats,
  },
})

export default store
