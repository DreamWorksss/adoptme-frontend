<script setup>
import ShelterPetCard from "@/components/PetCards/ShelterPetCard.vue";
import ShelterAddPet from "@/components/ShelterComponenets/ShelterAddPet.vue";
import useShelterStore from "@/Store/shelterStore"

const shelterStore = useShelterStore()
const shelterAnimals = shelterStore.getShelterPets();

const items = [1]

const addPet = (petObj) => {
  shelterStore.addPet(petObj);
}
</script>

<template>
  <div class="ma-8">
    <div class="d-flex justify-space-between" color="green">
      <div class="d-flex flex-fill">
        <v-text-field
          flat
          class="search-bar mr-4"
          density="compact"
          variant="solo"
          label="Search"
          single-line
          hide-details
          append-inner-icon="mdi-magnify"
          bg-color="rgba(255, 201, 116, 0.6)"
        ></v-text-field>

        <ShelterAddPet  
            :submitCallback="addPet">
        </ShelterAddPet>
        
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            flat
            color="rgb(255, 201, 116, 0.6)"
            v-bind="props"
            height="auto"
          >
            Filter &nbsp;
            <v-icon icon="mdi-arrow-down"></v-icon>
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
    
    <v-divider class="my-3" thickness="2" color="rgba(42, 157, 143, 0.8)"></v-divider>

    <v-container fluid class="pa-0">
      <v-row justify="start">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(pet, index) in shelterAnimals"
          v-bind:key="index"
        >
          <ShelterPetCard
            :name="pet.name"
            :dateOfBirth="pet.dateOfBirth"
            :gender="pet.gender"
            :imageUrl="pet.imageUrl"
          >
          <template #icons>
              
            <div class="w-100 h-100 justify-start icon-color align-end" style="display: flex;">
              <v-btn icon="mdi-clipboard-edit" variant="plain" class="text-h5">
              
              </v-btn>

              <v-btn icon="mdi-delete" variant="plain" class="text-h5" @click="shelterStore.deletePet(pet.id)">
              
              </v-btn>
            </div>
          </template>
        </ShelterPetCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.search-bar {
  max-width: 30%;
}

.corner-image {
  background: rgb(42,157,143);
  background: linear-gradient(0deg, rgba(0,0,0, 0.5) 0%, rgba(255,255,255,0) 30%);
}

.icon-color {
  color: rgba(42,157,143, 0.8)
}
</style>
<script>
export default {
    name: "ShelterMainView",
    components: { ShelterAddPet }
};
</script>
