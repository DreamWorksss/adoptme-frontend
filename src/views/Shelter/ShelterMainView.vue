<script setup>
import ShelterPetCard from "@/components/PetCards/ShelterPetCard.vue";

import { ref } from "vue";

// state
const shelterAnimals = ref([
  { name: "aaaaa", dateOfBirth: "12.12.2021", gender: "male" },
  { name: "bbbbb", dateOfBirth: "12.12.2020", gender: "male" },
  { name: "ccccc", dateOfBirth: "12.12.2019", gender: "female" },
  { name: "ddddd", dateOfBirth: "12.12.2018", gender: "male" },
]);
</script>

<template>
  <div class="ma-8">
    <div class="d-flex justify-space-between" color="green">
      <div class="d-flex flex-fill">
        <v-text-field
          flat
          class="search-bar mr-4"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search"
          single-line
          hide-details
          append-inner-icon="mdi-magnify"
          bg-color="rgba(255, 201, 116, 0.7)"
        ></v-text-field>

        <v-btn flat height="auto" color="rgb(255, 201, 116, 0.6)">Add +</v-btn>
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            color="rgb(255, 201, 116, 0.6)"
            v-bind="props"
            height="auto"
          >
            Filter &nbsp<font-awesome-icon
              :icon="['fas', 'arrow-down']"
              style="color: #5bb4a9"
            />
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-container fluid>
      <v-row justify="start">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="4"
          v-for="(pet, index) in shelterAnimals"
          v-bind:key="index"
        >
          <ShelterPetCard
            :name="pet.name"
            :dateOfBirth="pet.dateOfBirth"
            :gender="pet.gender"
          ></ShelterPetCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.search-bar {
  max-width: 30%;
}
</style>
<script>
export default {
  name: "ShelterMainView",
};
</script>
