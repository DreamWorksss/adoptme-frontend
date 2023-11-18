<script setup>
import UserPetCard from "@/components/PetCards/UserPetCard.vue";
import { ref, watch } from "vue";

const shelterAnimals = ref([
  { name: "Rocky", gender: "male", imageUrl: "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J", shelter: "Whisker Whispers" },
  { name: "Max", gender: "male", imageUrl: "https://images.rawpixel.com/image_300/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg", shelter: "Purr Paradise" },
  { name: "Chloe", gender: "female", imageUrl: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg", shelter: "Meow Mansion" },
  { name: "Oliver", gender: "male", imageUrl: "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg", shelter: "Paw Palace" },
  { name: "Felix", gender: "male", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.668xw:1.00xh;0.119xw,0&resize=1200:*", shelter: "Whisker Whispers" },
]);

const searchTerm = ref('');
const filterOption = ref('');
const filteredAnimals = ref(shelterAnimals.value);

const applyFilter = () => {
  switch (filterOption.value) {
    case 'Name':
      filteredAnimals.value = shelterAnimals.value.filter(pet => pet.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
      break;
    case 'Female':
      filteredAnimals.value = shelterAnimals.value.filter(pet => pet.gender.toLowerCase() === 'female');
      break;
    case 'Male':
      filteredAnimals.value = shelterAnimals.value.filter(pet => pet.gender.toLowerCase() === 'male');
      break;
    case 'Shelter':
      filteredAnimals.value = shelterAnimals.value.filter(pet => pet.shelter.toLowerCase().includes(searchTerm.value.toLowerCase()));
      break;
    default:
      // Default to no filtering if the option is not recognized
      filteredAnimals.value = shelterAnimals.value;
  }
};

watch(searchTerm, applyFilter);
watch(filterOption, applyFilter);

const openDetails = (pet) => {
  // Implement the logic to open more details for the selected pet
  console.log(`Opening details for ${pet.name}`);
};

</script>

<template>
  <div class="ma-8">
    <div class="d-flex justify-space-between" color="green">
      <div class="d-flex flex-fill">
        <v-text-field
          v-model="searchTerm"
          flat
          class="search-bar"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          bg-color="rgb(255, 201, 116, 0.6)"
        ></v-text-field>
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
          <v-list-item @click="filterOption = 'Name'">Name</v-list-item>
          <v-list-item @click="filterOption = 'Female'">Female</v-list-item>
          <v-list-item @click="filterOption = 'Male'">Male</v-list-item>
          <v-list-item @click="filterOption = 'Shelter'">Shelter</v-list-item>
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
          v-for="(pet, index) in filteredAnimals"
          :key="index"
        >
          <UserPetCard
            :name="pet.name"
            :gender="pet.gender"
            :imageUrl="pet.imageUrl"
            :moreCallback="() => openDetails(pet)"
          ></UserPetCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.search-bar {
  min-width: 20%;
  max-width: 25%;
}

.card-background {
  background: rgb(42, 157, 143);
  background: linear-gradient(
    0deg,
    rgba(42, 157, 143, 0.4) 0%,
    rgba(42, 157, 143, 0) 100%
  );
}
</style>

<script>
export default {
  name: "AnimalsListView",
};
</script>
