<script setup></script>

<template>
  <v-card class="mx-auto" variant="elevated">
    <div class="pa-2 card-background">
      
      <div class="d-flex">
        <v-img
          :aspect-ratio="16 / 9"
          cover
          src="https://images.wallpaperscraft.com/image/single/lynx_predator_funny_1046243_300x255.jpg"
        />
      </div>

      <div class="d-flex flex-column align-start mt-2">
        <div class="mx-4 align-self-center text-h5">{{name}}</div>
        <div class="text-subtitle-1">Gender: {{gender}}</div>
        <div class="text-subtitle-1">Date of birth: {{dateOfBirth}}</div>
      </div>

      <div class="d-flex flex-row justify-space-between">
        <div class="d-inline">
          <div class="d-inline">d</div>
          <div class="d-inline">a</div>
        </div>

        <div class="text-decoration-underline font-italic" :on-click="() => {moreCallback()}">More→</div>
      </div>
    </div>
  </v-card>
</template>

<style scoped>
.card-background {
  background: rgb(42, 157, 143);
  background: linear-gradient(
    0deg,
    rgba(42, 157, 143, 0.4) 0%,
    rgba(42, 157, 143, 0.3) 30%,
    rgba(42, 157, 143, 0) 50%
  );
}

.text-subtitle-1 {
  line-height: 1.25rem;
}
</style>

<script>
    export default {
        props: ['name', 'gender', 'dateOfBirth', 'moreCallback'],
        name: 'ShelterPetCard'
    }
</script>
