<template>
  <v-card class="mx-auto" variant="flat">
    <div class="card-background">
      
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
            <div class="text-subtitle-1">Shelter: {{ shelter }}</div>
          </div>
        </div>

        <div class="d-flex flex-column align-end">
            <v-btn
              variant="plain"
              class="more-button text-body-1 align-end" 
              text="More"
              append-icon="mdi-arrow-right"
              @click="moreCallback"
            >
              More
            </v-btn>
          </div>

      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-background {
  border: 2px solid rgba(42, 157, 143, 0.2);
}

.card-info-background {
  background: rgba(42, 157, 143, 0.1);
  /*border: 2px solid rgba(42, 157, 143, 0.2);*/
  border-top: 0;
}

.text-subtitle-1 {
  line-height: 1.25rem;
  font-style: italic;
}

</style>

<script>
export default {
  props: ["id", "name", "gender", "shelter", "imageUrl", "moreCallback"],
  name: "UserPetCard",
};
</script>
