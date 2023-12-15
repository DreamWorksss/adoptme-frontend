import { createRouter, createWebHashHistory } from 'vue-router'
import AdoptionForm from '../views/User/AdoptionFormPage.vue'
import MainPage from '../views/MainPage.vue'
import PetDetailsPage from "../views/User/PetDetailsPage.vue";

import ShelterMainView from '../views/Shelter/ShelterMainView.vue'
import PetListView from '../views/User/PetListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {path: '/pets/:id',
  name: 'PetDetails',
  component: PetDetailsPage,
  props : {default: true, PetDetailsPage: true}
  },
  {
    path: '/shelter',
    name: 'shelter',
    component: ShelterMainView
  },
  {
    path: '/form/:id',
    name: 'form',
    component: AdoptionForm
  },
  {
    path: '/pets',
    name: 'pets',
    component: PetListView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router