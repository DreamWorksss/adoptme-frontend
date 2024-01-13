<script setup>
import useUIStateStore from "@/Store/uiStateStore";
import router from "@/router";

const uiState = useUIStateStore();

const navigateToShelter = () => {
  router.push({ path: "/shelter" });
};
</script>
<template>
  <header class="elevation-0" style="color: #5BB4A9;">
    <div class="flex-fill mx-10">
      <div class="d-flex justify-space-between align-center flex-column flex-sm-row"  size="large">
        <div class="d-flex" @click="router.push({path: '/'})">
          <img src="@/assets/logo.png" alt="AdoptMe Logo" class="logo" />
        <div class="text-h4 text-no-wrap">
          AdoptMe<span v-if="uiState.pageMoreInfo != undefined">: </span> 
          <span v-if="uiState.pageMoreInfo != undefined">{{ uiState.pageMoreInfo }}</span>
        </div>
        </div>
        
        <div class="flex-fill"></div>
        <v-btn
          rounded
          flat
          color="black"
          variant="plain"
          text="To Shelter"
          append-icon="mdi-swap-horizontal"
          class="text-body-1"
          @click="navigateToShelter"
          v-if="uiState.shelterButtonVisibility"
        ></v-btn>

        <div class="text-h4" v-if="uiState.shelterNameVisibility">
          {{ uiState.shelterName }}
        </div>
      </div>

      <div class="text-subtitle-1 text-center text-black text-sm-left">Find Your Fur-ever Companion!</div>
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
