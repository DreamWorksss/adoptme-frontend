<template>
  <v-card class="mx-auto" variant="elevated">
    <div class="pa-2 card-background">
      <div class="d-flex">
        <v-img
          :aspect-ratio="16 / 9"
          cover
          src="https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/QyDHB4YHkK2V6TA6QkDzSIMbQpg9IIUKO5tn8KuDcJ1.jpeg"
        />
        <div class="mx-4 align-self-center text-h5">{{name}}</div>
      </div>

      <div class="d-flex flex-column align-start mt-2">
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
    rgba(42, 157, 143, 0) 100%
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
