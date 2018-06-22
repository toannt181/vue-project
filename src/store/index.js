import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    base: 100,
  },
  modules: {
    home,
  },
})

export default store
