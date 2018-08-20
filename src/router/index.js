import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/index'
import NotFoundPage from '@/pages/NotFoundPage'
import Info from '@/pages/Info'
import ModalContainer from '@/pages/ModalContainer'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/modal',
      component: ModalContainer,
    },
    {
      path: '/info',
      component: Info,
    },
    { path: '*', component: NotFoundPage },
  ],
})
