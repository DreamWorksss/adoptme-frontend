import { defineStore } from "pinia";
import { ref } from "vue";
import router from "@/router";

const evaluateIfHome = (pathName) => {
  if (pathName === "home") return true;
  return false;
};

const evaluateIfShelter = (pathName) => {
  if (pathName === "shelter") return true;
  return false;
};

const pageMoreInfoMapping = {
    home: undefined,
    shelter: "Animals"
}

const useUIStateStore = defineStore("uiState", () => {
  const shelterButtonVisibility = ref(false);
  const shelterNameVisibility = ref(false);
  const pageMoreInfo = ref('');
  const shelterName = ref("");

  const setUiStateBastedOn = (path) => {
    shelterButtonVisibility.value = evaluateIfHome(path.name);
    shelterNameVisibility.value = evaluateIfShelter(path.name);
    pageMoreInfo.value = pageMoreInfoMapping[path.name];
  };

  router.beforeEach((to, from) => {
    setUiStateBastedOn(to);
    console.log(to, from);
  });

  return { shelterButtonVisibility, shelterNameVisibility, shelterName, pageMoreInfo };
});

export default useUIStateStore;
