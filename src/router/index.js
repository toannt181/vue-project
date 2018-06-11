import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
import NotFoundPage from '@/pages/NotFoundPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:type?',
      component: Home,
    },
    { path: '*', component: NotFoundPage },
  ],
})
