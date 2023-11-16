import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import PetDetailsPage from "@/components/PetDetailsPage.vue";

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