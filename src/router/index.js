import { createRouter, createWebHashHistory } from 'vue-router'
import AdoptionForm from '../views/User/AdoptionFormPage.vue'
import MainPage from '../views/MainPage.vue'
import PetDetailsPage from "../views/User/PetDetailsPage.vue";

import ShelterMainView from '../views/Shelter/ShelterMainView.vue'
import PetListView from '../views/User/PetListView.vue'
import ShelterListView from '../views/User/ShelterListView.vue'
import ShelterPetDetailsPage from '../views/Shelter/ShelterPetDetailsPage.vue'
import LoginPage from '../views/LoginPage.vue'
import AccountRegister from '../views/AccountRegisterPage.vue'
import DonatePage from '../views/User/DonatePage.vue'
import AdoptAtDistanceFormPage from "@/views/User/AdoptAtDistanceFormPage.vue";

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
  },
  {
    path: '/shelter/pet/:id',
    name: 'ShelterPetDetails',
    component: ShelterPetDetailsPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: AccountRegister
  },
  {
    path: '/shelters',
    name: 'shelters',
    component: ShelterListView
  },
  {
    path: '/donate/:id',
    name: 'donate',
    component: DonatePage
  },
  {
    path: '/adopt-at-distance/:id',
    name: 'AdoptAtDistance',
    component: AdoptAtDistanceFormPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router