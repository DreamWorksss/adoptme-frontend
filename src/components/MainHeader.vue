<script setup>
import useUIStateStore from "@/Store/uiStateStore";
import router from "@/router";

const uiState = useUIStateStore();

const navigateToShelter = () => {
  router.push({ path: "/shelter" });
};
</script>
<template>
  <header class="elevation-0">
    <div class="flex-fill mx-10">
      <div class="d-flex justify-space-between align-center" size="large">
        <img src="@/assets/logo.png" alt="AdoptMe Logo" class="logo" />
        <div class="text-h4">
          AdoptMe<span v-if="uiState.pageMoreInfo != undefined">: </span> 
          <span v-if="uiState.pageMoreInfo != undefined">{{ uiState.pageMoreInfo }}</span>
        </div>
        <div class="flex-fill"></div>
        <v-btn
          rounded
          flat
          color="#ffc974"
          text="Shelter"
          @click="navigateToShelter"
          v-if="uiState.shelterButtonVisibility"
        ></v-btn>

        <div class="text-h4" v-if="uiState.shelterNameVisibility">
          {{ uiState.shelterName }}
        </div>
      </div>

      <div class="text-subtitle-1 text-left">Find Your Fur-ever Companion!</div>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  min-height: 5rem;
  padding: 0.8rem;
  background: rgb(255, 201, 116);
  background: linear-gradient(
    0deg,
    rgba(255, 201, 116, 0.75) 0%,
    rgba(255, 255, 255, 0) 50%
  );
}

.logo {
  width: 50px;
  height: auto;
  margin-right: 10px;
}
</style>

<script></script>
