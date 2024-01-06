<script setup>
import { ref, onMounted } from 'vue';
import useShelterStore from "@/Store/allSheltersStore.js";

const allSheltersStore = useShelterStore();
const shelters = allSheltersStore.getAllShelters();

</script>

<template>

  <div>
    <h1 style="color: #5BB4A9; font-size: 3rem; font-family: Nunito;">All Shelters</h1>
    <div v-if="shelters.length > 0">
      <ul>
        <li v-for="(shelter, id) in shelters" :key="id" class="shelter-item">
          <div class="shelter-content">
            <img :src="shelter.imageUrl" alt="Shelter Image" class="shelter-image" />
            <div class="shelter-details">
              <h3 class="header-font">{{ shelter.name }}</h3>
              <p class="description-font">{{ shelter.description }}</p>
              <v-btn class="donate-button" @click="navigateToDonate(id)">Donate</v-btn>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No shelters found.</p>
    </div>
  </div>
</template>

<style>

.header-font{
    font-family: Nunito;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.description-font{
    font-family: Arial;
    font-size: 1.3rem;
    margin-bottom: 2rem;
}

.shelter-item {
  margin-bottom: 4rem;
}

.shelter-content {
  display: flex;
  align-items: flex-start;
  text-align: left;
  max-width: 85rem;
}

.shelter-image {
  width: 30rem;
  height: auto;
  margin-left: 2rem;
  margin-right: 2rem;
}

.donate-button {
  padding: 0.625rem 3rem;
  border: 0.1rem solid #5BB4A9;
  color: white;
  cursor: pointer;
  margin-top: 0.625rem;
  display: block;
  border-radius: 0.3125rem;
  font-family: Nunito;
}
</style>

<script>
export default {
  name: "ShelterListView",
   methods: {
    navigateToDonate(shelterID) {
      this.$router.push('/donate/' + shelterID);
    },
  },
};
</script>
