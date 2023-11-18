import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import LoginPage from '../components/LoginPage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
