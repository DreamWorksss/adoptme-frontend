import { createRouter, createWebHashHistory } from 'vue-router'
import AdoptionForm from '../views/User/AdoptionFormPage.vue'
import MainPage from '../views/MainPage.vue'
import PetDetailsPage from "@/views/user/PetDetailsPage.vue";
import AnimalsListView from '../views/User/AnimalsListView.vue'

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
  {
    path: '/form/:id',
    name: 'form',
    component: AdoptionForm
  },
  {
    path: '/pets',
    name: 'pets',
    component: AnimalsListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router