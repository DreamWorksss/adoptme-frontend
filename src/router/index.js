import { createRouter, createWebHashHistory } from 'vue-router'
import AdoptionForm from '../views/User/AdoptionFormPage.vue'

const routes = [
  {
    path: '/form/:id',
    name: 'form',
    component: AdoptionForm
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
