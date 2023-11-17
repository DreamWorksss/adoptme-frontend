import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '../views/user/MainPage.vue'
import PetDetailsPage from "@/views/user/PetDetailsPage.vue";

import ShelterMainView from '../views/Shelter/ShelterMainView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {path: '/pets/:id',
  name: 'PetDetails',
  component: PetDetailsPage,

  },
  {
    path: '/shelter',
    name: 'shelter',
    component: ShelterMainView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router