<script setup>
//refactor to use Composition API
import usePetStore from "@/Store/store.js";
import { computed } from "vue";
import { onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
const store = usePetStore()

const petDetails = computed(() => {
    return store.selectedPet;
});

onMounted(() => {
  if (petDetails.value === undefined) {
    store.fetchSelectedPet(route.params.id);
  }
})

const redirectToForm = () => {
  router.push("/form/" + route.params.id);
}
</script>

<template>
  <!-- refactor to make comp auto resize -->
    <div class="pet-details-page">
      <v-container fluid class="ma-0 pa-0 mt-3">
        <v-row>
          <v-col class="font-italic" cols="12" sm="12" md="5" order="2" order-md="1">
            <div
                class="text-content text-left text-h6 font-weight-regular ml-15"
            >
                <p>Name: {{ petDetails?.name }}</p>
                <p>Gender: {{ petDetails?.gender }}</p>
                <p>Date of Birth: {{ petDetails?.dateOfBirth }}</p>
                <p>Shelter: {{ petDetails?.shelter }}</p>
                <p>Description:</p>
                <p class="font-weight-light mt-4 mr-6">
                    {{ petDetails?.description }}
                </p>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="7" order="1" order-md="2">
            <div class="d-flex flex-column w-100">
                <v-img
                  class="ma-3"
                    cover
                    :src="petDetails?.imageUrl"
                    alt="Photo of {{ petDetails?.name }}"
                    :aspect-ratio="16 / 9"
                >
                </v-img>
                <div class="d-flex flex-column mx-auto" order-md="2" order="8">
                    <v-btn
                        text="ADOPT"
                        class="adopt-button my-10 rounded-l elevation-7"
                        @click="redirectToForm"
                        style="color: #5BB4A9;"
                    ></v-btn>
                    <v-btn
                        text="ADOPT AT A DISTANCE"
                        class="adopt-button mb-10 rounded-l elevation-7"
                        style="color: #5BB4A9;"
                    ></v-btn>
                </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
export default {
  name: "PetDetailsPage"
};
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
