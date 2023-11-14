<template>
  <div class="ma-8">
    <div class="d-flex justify-space-between">
      <div class="d-inline">
        <div class="d-inline">this is a serachbar</div>
        <div class="d-inline ml-2">add</div>
      </div>
      <div class="d-inline">filter</div>
    </div>

    <v-container>
      <v-row align="center" justify="start">
        <v-col cols="4">
          <v-card class="mx-auto" variant="elevated">
            <div class="pa-2 card-background">
              <div class="d-flex">
                <v-img
                  cover
                  src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                />
                <div class="mx-4 align-self-center">Pisciuta</div>
              </div>

              <div class="d-flex flex-column align-start">
                <div>Gender: Female</div>
                <div>Date of birth: 18.18.2020</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
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
  name: "ShelterMainView",
};
</script>
