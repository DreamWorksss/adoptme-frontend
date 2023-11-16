<template>
  <div class="ma-8">
    <div class="d-flex justify-space-between" color="green">
      <div class="d-flex flex-fill">
        <v-text-field
          flat
          class="search-bar"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Search"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          bg-color="rgb(255, 201, 116, 0.6)"
        ></v-text-field>
      </div>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn flat color="rgb(255, 201, 116, 0.6)" v-bind="props" height="auto">
            Filter &nbsp<font-awesome-icon
              :icon="['fas', 'arrow-down']"
              style="color: #5bb4a9"
            />
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

    <v-container fluid>
      <v-row align="center" justify="start">
        <v-col cols="3">
          <v-card class="mx-auto" variant="elevated">
            <div class="pa-2 card-background">
              <div class="d-flex">
                <v-img
                  cover
                  src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                />
                <div class="mx-4 align-self-center">
                  <div class="animal-name-text text-h6">Chloe</div>
                  <div class="gender-text text-subtitle-1">-female-</div>
                </div>
              </div>

              <div class="d-flex flex-column align-start">
                <div class="text-subtitle-1">Shelter: Whisker Whispers</div>
              </div>
              <div class="d-flex flex-column align-end more-text text-subtitle-1">More→</div>
            </div>
          </v-card>
        </v-col>

        <v-col col="1"></v-col>

        <v-col cols="3">
          <v-card class="mx-auto" variant="elevated">
            <div class="pa-2 card-background">
              <div class="d-flex">
                <v-img
                  cover
                  src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                />
                <div class="mx-4 align-self-center">
                  <div class="animal-name-text text-h6">Chloe</div>
                  <div class="gender-text text-subtitle-1">-female-</div>
                </div>
              </div>

              <div class="d-flex flex-column align-start">
                <div class="text-subtitle-1">Shelter: Whisker Whispers</div>
              </div>
              <div class="d-flex flex-column align-end more-text text-subtitle-1">More→</div>
            </div>
          </v-card>
        </v-col>

        <v-col col="1"></v-col>

        <v-col cols="3">
          <v-card class="mx-auto" variant="elevated">
            <div class="pa-2 card-background">
              <div class="d-flex">
                <v-img
                  cover
                  src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                />
                <div class="mx-4 align-self-center">
                  <div class="animal-name-text text-h6">Chloe</div>
                  <div class="gender-text text-subtitle-1">-female-</div>
                </div>
              </div>

              <div class="d-flex flex-column align-start">
                <div class="text-subtitle-1">Shelter: Whisker Whispers</div>
              </div>
              <div class="d-flex flex-column align-end more-text text-subtitle-1">More→</div>
            </div>
          </v-card>
        </v-col>

        <v-col cols="3">
          <v-card class="mx-auto" variant="elevated">
            <div class="pa-2 card-background">
              <div class="d-flex">
                <v-img
                  cover
                  src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                />
                <div class="mx-4 align-self-center">
                  <div class="animal-name-text text-h6">Chloe</div>
                  <div class="gender-text text-subtitle-1">-female-</div>
                </div>
              </div>

              <div class="d-flex flex-column align-start">
                <div class="text-subtitle-1">Shelter: Whisker Whispers</div>
              </div>
              <div class="d-flex flex-column align-end more-text text-subtitle-1">More→</div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.search-bar {
  min-width: 20%;
  max-width: 25%;
}

.card-background {
  background: rgb(42, 157, 143);
  background: linear-gradient(
    0deg,
    rgba(42, 157, 143, 0.4) 0%,
    rgba(42, 157, 143, 0) 100%
  );
}

.animal-name-text {
  font-weight: 600;
  font-size: 120%;
}

.more-text {
  font-style: italic;
  text-decoration: underline;
}
</style>

<script>
export default {
  name: "AnimalsListView",
};
</script>
