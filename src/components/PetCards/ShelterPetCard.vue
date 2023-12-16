<script setup></script>

<template>
  <v-card class="mx-auto" variant="flat">
    <div>
      <div class="d-flex">
        <v-img
          :aspect-ratio="16 / 9"
          cover
          :src="imageUrl"
        >
        </v-img>
      </div>
      <div class="card-info-background pa-2">
        <div>
          <div class="d-flex flex-column align-center">
            <div class="mx-4 align-self-center text-h5">{{ name }}</div>
            <div class="text-subtitle-1">Gender: {{ gender }}</div>
            <div class="text-subtitle-1">Date of birth: {{ dateOfBirth }}</div>
          </div>

          <div class="d-flex flex-row justify-space-between mt-2">
            <slot name="icons"></slot>
            <v-btn
              variant="plain"
              class="more-button text-body-1 align-self-center" 
              text="More"
              append-icon="mdi-arrow-right"
              @click="moreCallback"
            >
              More
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-info-background {
  background: rgba(42, 157, 143, 0.1);
  border: 2px solid rgba(42, 157, 143, 0.2);
  border-top: 0;
}

.text-subtitle-1 {
  line-height: 1.25rem;
}
</style>

<script>
export default {
  props: ["name", "gender", "dateOfBirth", "shelter", "description", "imageUrl", "moreCallback"],
  name: "ShelterPetCard",
};
</script>
