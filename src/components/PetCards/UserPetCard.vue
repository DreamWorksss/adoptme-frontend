<template>
  <v-card class="mx-auto" variant="elevated">
    <div class="pa-2 card-background">
      <div class="d-flex">
        <v-img
          class="pet-image"
          cover
          :src="imageUrl"
        />
        <div class="mx-4 align-self-center">
          <div class="animal-name-text text-h6">{{ name }}</div>
          <div class="gender-text text-subtitle-1">-{{ gender }}-</div>
        </div>
      </div>

      <div class="d-flex flex-column align-start">
        <div class="text-subtitle-1">Shelter: Whisker Whispers</div>
      </div>
      <div class="d-flex flex-column align-end more-text text-subtitle-1" @click="moreCallback">More→</div>
    </div>
  </v-card>
</template>

<style scoped>
.card-background {
  background: rgb(42, 157, 143);
  background: linear-gradient(
    0deg,
    rgba(42, 157, 143, 0.4) 0%,
    rgba(42, 157, 143, 0) 100%
  );
}

.pet-image {
  height: 20rem; /* Adjust the height as needed */
  object-fit: cover;
}

.text-subtitle-1 {
  line-height: 1.25rem;
  font-style: italic;
}

.animal-name-text {
  font-weight: 500;
  font-style: italic;
}

.more-text {
  text-decoration: underline;
}
</style>

<script>
    export default {
        props: ['name', 'gender', 'imageUrl', 'moreCallback'],
        name: 'UserPetCard'
    }
</script>