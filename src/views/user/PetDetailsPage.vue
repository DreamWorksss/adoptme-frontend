<template>
  <div class="pet-details-page">
    <div class="d-flex flex-row font-italic mt-3">
      <div class="text-content text-left text-h6 font-weight-regular w-66 ml-15">
        <p>Name: {{ petDetails.name }}</p>
        <p>Gender: {{ petDetails.gender }}</p>
        <p>Date of Birth: {{ petDetails.dateOfBirth }}</p>
        <p>Shelter: {{ petDetails.shelter }}</p>
        <p>Description: </p>
        <p class="font-weight-light mt-4"> &ensp; {{ petDetails.description }}</p>
      </div>
      <div class="d-flex flex-column w-100">
        <v-img
            :src="petDetails.photo"
            alt="Photo of {{ petDetails.name }}"
            :aspect-ratio="16/9">
        </v-img>
        <div class="d-flex flex-column mx-auto">
          <v-btn text="ADOPT" class="adopt-button my-10 rounded-l elevation-7"></v-btn>
          <v-btn text="ADOPT AT A DISTANCE" class="adopt-button mb-10 rounded-l elevation-7"></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {usePetStore} from '@/store.js';

export default defineComponent({
  name: 'PetDetailsPage',
  computed: {
    petDetails() {
      return usePetStore().selectedPet;
    },
  },
  mounted() {
    const petId = this.$route.params.id;
    usePetStore().fetchPetDetails(petId);
  },
});
</script>

<style>

.pet-details-page {
  background: linear-gradient(
      0deg,
      rgba(42, 157, 143, 0.75) 0%,
      rgba(255, 255, 255, 0) 50%
  );
}

.text-content {
  font-family: Inter, serif, sans-serif;
}

.adopt-button {
  background: #f0d7a3;
  color: #2a9d8fbf;
}


</style>
