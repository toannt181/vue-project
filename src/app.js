import Vue from 'vue'
import App from './App'
import createRouter from './router'

export default function createApp() {
  const router = createRouter()
  const app = new Vue({
    components: { App },
    template: '<App />',
    router,
  })
  return { app, router }
}
