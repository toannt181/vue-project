import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
import NotFoundPage from '@/pages/NotFoundPage'
import GameContainer from '@/pages/GameContainer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:type?',
      component: Home,
    },
    {
      path: '/games/:id',
      component: GameContainer,
    },
    { path: '*', component: NotFoundPage },
  ],
})
