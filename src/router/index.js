import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/user/MainPage.vue'
import PetDetailsPage from "@/views/user/PetDetailsPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/pets/:id',
    name: 'PetDetails',
    component: PetDetailsPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router