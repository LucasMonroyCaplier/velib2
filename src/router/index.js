import { createRouter, createWebHashHistory } from 'vue-router'
import FenetreView from '../views/FenetreView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FenetreView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
